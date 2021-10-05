import React, { useContext, useEffect } from 'react';
import { Box, Paper, Button, Tooltip, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RestoreIcon from '@material-ui/icons/Restore';
import { useStyles } from './GameTimer.styles';
import { getMinutesAndSecondsFromTime } from '../../Util/getMinutesAndSecondsFromTime';
import { useInterval } from '../../Util/hooks/useInterval';
import { TimerStatus } from '../../Shared/enums';
import { SettingsContext } from '../../context';
import { convertToSeconds } from '../../Util/convertToSeconds';
import { UsersContext } from '../../context/users.context';
import {
  handleEndRoundSubmit,
  handleResetTimerSubmit,
  handleStartTimerSubmit,
} from '../../api/game';
import { socket } from '../../api/playersRequests';
import { IssueContext } from '../../context/issue.context';
import { ScoreContext } from '../../context/score.context';
import {
  ResetScoresActionCreator,
  SetScoresWaitingActionCreator,
} from '../../reducers/score';

type Props = {
  secondsRemaining: number;
  setSecondsRemaining: React.Dispatch<React.SetStateAction<number>>;
  setIsRoundEnded: React.Dispatch<React.SetStateAction<boolean>>;
  statusStarted: TimerStatus;
  setStatusStarted: React.Dispatch<React.SetStateAction<TimerStatus>>;
  buttonDisabled: boolean;
  setButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GameTimer: React.FC<Props> = ({
  setIsRoundEnded,
  statusStarted,
  setStatusStarted,
  secondsRemaining,
  setSecondsRemaining,
  buttonDisabled,
  setButtonDisabled,
}) => {
  const classes = useStyles();
  const {
    settingsState: {
      currentSets: { minutes, seconds },
    },
  } = useContext(SettingsContext);
  const {
    appState: {
      currentPlayer: { isAdmin, roomId },
    },
  } = useContext(UsersContext);
  const {
    issueState: { currentId },
  } = useContext(IssueContext);
  const { scoreDispatch } = useContext(ScoreContext);

  useEffect(() => {
    socket.off('isTimerStarted');
    socket.on('isTimerStarted', () => {
      setStatusStarted(TimerStatus.STARTED);
      setIsRoundEnded(false);
      setButtonDisabled(true);
      scoreDispatch(SetScoresWaitingActionCreator());
    });
  });

  useEffect(() => {
    socket.off('isTimerReset');
    socket.on('isTimerReset', () => {
      setStatusStarted(TimerStatus.STOPPED);
      setSecondsRemaining(convertToSeconds(minutes, seconds));
      setButtonDisabled(false);
      scoreDispatch(ResetScoresActionCreator());
    });
  });

  const handleStart = () => {
    handleStartTimerSubmit(roomId);
  };
  const handleReset = () => {
    handleResetTimerSubmit(roomId);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatusStarted(TimerStatus.STOPPED);
        setIsRoundEnded(true);
        handleEndRoundSubmit({ roomId, issueId: currentId });
      }
    },
    statusStarted === TimerStatus.STARTED ? 1000 : null
  );

  return (
    <Box className={classes.centerBlock}>
      <Paper className={classes.paperDigits}>
        <Typography className={classes.topText}>
          {getMinutesAndSecondsFromTime(secondsRemaining)}
        </Typography>
      </Paper>
      {isAdmin && (
        <Box className={classes.buttonsBlock}>
          <Tooltip title="Run Round" aria-label="Run Round">
            <Button
              className={classes.timerButton}
              onClick={handleStart}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<PlayArrowIcon />}
              disabled={buttonDisabled}
            ></Button>
          </Tooltip>
          <Tooltip title="Reset Round" aria-label="Reset Round">
            <Button
              className={classes.timerButton}
              onClick={handleReset}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<RestoreIcon />}
              disabled={!buttonDisabled}
            ></Button>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};
