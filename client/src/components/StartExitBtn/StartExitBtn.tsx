import React, { useContext } from 'react';
import { Button, Container, Paper, TextField } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useStartExitGameStyles } from './StartExitBtn.styled';
import { handleSendSettings } from '../../api/settings/settings.request';
import { SettingsContext } from '../../context/settings.context';
import { NavLink } from 'react-router-dom';

type Props = {
  isAdmin: boolean;
  link: string;
};

export const StartExitBtn: React.FC<Props> = ({ isAdmin, link }) => {
  const { settingsState, settingsDispatch } = useContext(SettingsContext);
  const classes = useStartExitGameStyles({ isAdmin });
  const handleStartGame = () => {
    handleSendSettings(settingsState.currentSets);
  };
  const handleExitGameButton = () => {
    console.log('End');
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
          <NavLink className={classes.btnStart} to="/game">
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartGame}
            >
              Start
            </Button>
          </NavLink>
        ) : null}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleExitGameButton}
        >
          Exit
        </Button>
      </div>
    </Container>
  );
};
