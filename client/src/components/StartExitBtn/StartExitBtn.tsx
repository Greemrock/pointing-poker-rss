import React, { useContext, useEffect } from 'react';
import { Button, Container, Paper, TextField } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useStartExitGameStyles } from './StartExitBtn.styled';
import { handleSendSettings } from '../../api/settings/settings.request';
import { SettingsContext } from '../../context/settings.context';
import { handleStartGameSubmit } from '../../api/playersRequests';
import { handleLeaveRoom } from '../../api/game';
import { UsersContext } from '../../context';
import { AuthActionCreator } from '../../reducers/users';

export const StartExitBtn: React.FC = () => {
  const { settingsState } = useContext(SettingsContext);
  const {
    appState: {
      currentPlayer: { isAdmin, roomId },
    },
    dispatch,
  } = useContext(UsersContext);

  const classes = useStartExitGameStyles({ isAdmin });

  const handleStartGame = () => {
    handleSendSettings(settingsState.currentSets);
    handleStartGameSubmit(roomId);
  };

  const handleExit = () => {
    handleLeaveRoom(roomId);
    dispatch(AuthActionCreator(false));
  };

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
            value={roomId}
          />
          <Button
            className={classes.btn}
            type="button"
            aria-label="copy"
            variant="contained"
            color="primary"
            onClick={() => navigator.clipboard.writeText(roomId)}
            startIcon={<FileCopyIcon />}
          >
            copy
          </Button>
        </Paper>
      ) : null}
      <div className={classes.container}>
        {isAdmin ? (
          <Button variant="contained" color="primary" onClick={handleStartGame}>
            Start
          </Button>
        ) : null}
        <Button variant="outlined" color="secondary" onClick={handleExit}>
          Exit
        </Button>
      </div>
    </Container>
  );
};
