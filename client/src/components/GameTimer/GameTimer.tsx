import React, { useState, useEffect, useRef } from 'react';
import { Box, Paper, Button, Tooltip, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RestoreIcon from '@material-ui/icons/Restore';
import { useStyles } from './GameTimer.styles';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

const minutesAndSecondsFromTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time - 60 * minutes;
  return `${minutes} :${seconds >= 10 ? seconds : `0${seconds}`}`;
};

export const GameTimer: React.FC<{
  time: number;
}> = ({ time }) => {
  const classes = useStyles();
  const [secondsRemaining, setSecondsRemaining] = useState(time);
  const [statusStarted, setStatusStarted] = useState(STATUS.STOPPED);

  const handleStart = () => {
    setStatusStarted(STATUS.STARTED);
  };
  const handleReset = () => {
    setStatusStarted(STATUS.STOPPED);
    setSecondsRemaining(time);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatusStarted(STATUS.STOPPED);
      }
    },
    statusStarted === STATUS.STARTED ? 1000 : null
  );

  return (
    <Box className={classes.centerBlock}>
      <Paper className={classes.paperDigits}>
        <Typography className={classes.topText}>
          {minutesAndSecondsFromTime(secondsRemaining)}
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
          ></Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
