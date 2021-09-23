import React, { useContext } from 'react';
import { Button, Container, Paper, TextField } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useStartExitGameStyles } from './StartExitBtn.styled';
import { SettingsContext } from '../../App';
import { socket } from '../../api/playersRequests';
import { SetRoomIdActionCreator } from '../../reducers/settings/settingsActionCreators';
import { AppContext } from '../../App';

type Props = {
  isAdmin: boolean;
  link: string;
};

export const StartExitBtn: React.FC<Props> = ({ isAdmin, link }) => {
  const { settingsState, settingsDispatch } = useContext(SettingsContext);
  const { appState, dispatch } = useContext(AppContext);
  const classes = useStartExitGameStyles({ isAdmin });
  return (
    <Container className={classes.root} maxWidth="md">
      {isAdmin ? (
        <Paper className={classes.link} component="div" elevation={2}>
          <TextField
            label="Link to lobby"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            value={link}
          />
          <Button
            className={classes.btn}
            type="button"
            aria-label="copy"
            variant="contained"
            color="primary"
            onClick={() => navigator.clipboard.writeText(link)}
            startIcon={<FileCopyIcon />}
          >
            copy
          </Button>
        </Paper>
      ) : null}
      <div className={classes.container}>
        {isAdmin ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log(appState.currentPlayer.roomId);
              settingsDispatch(
                SetRoomIdActionCreator(appState.currentPlayer.roomId as string)
              );
              socket.emit('sendSettings', settingsState.currentSets);
            }}
          >
            Start
          </Button>
        ) : null}
        <Button variant="outlined" color="secondary">
          Exit
        </Button>
      </div>
    </Container>
  );
};
