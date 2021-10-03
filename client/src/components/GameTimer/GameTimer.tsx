import React, { useContext, useState } from 'react';
import { Box, Paper, Button, Tooltip, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RestoreIcon from '@material-ui/icons/Restore';
import { useStyles } from './GameTimer.styles';
import { getMinutesAndSecondsFromTime } from '../../Util/getMinutesAndSecondsFromTime';
import { useInterval } from '../../Util/hooks/useInterval';
import { TimerStatus } from '../../Shared/enums';
import { SettingsContext } from '../../context';
import { convertToSeconds } from '../../Util/convertToSeconds';

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

  const handleStart = () => {
    setStatusStarted(TimerStatus.STARTED);
    setIsRoundEnded(false);
    setButtonDisabled(!buttonDisabled);
  };
  const handleReset = () => {
    setStatusStarted(TimerStatus.STOPPED);
    setSecondsRemaining(convertToSeconds(minutes, seconds));
    setButtonDisabled(!buttonDisabled);
    setIsRoundEnded(true);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatusStarted(TimerStatus.STOPPED);
        setIsRoundEnded(true);
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
    </Box>
  );
};