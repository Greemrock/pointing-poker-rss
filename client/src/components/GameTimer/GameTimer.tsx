import React, { useState, useEffect, useRef } from 'react';
import { Box, Paper, Button, Container, Tooltip } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import RestoreIcon from '@material-ui/icons/Restore';
import { useStyles } from './GameTimer.styles';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

const minutesAndSecondsFromTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time - 60 * minutes;
  return `${minutes >= 10 ? minutes : `0${minutes}`}:${
    seconds >= 10 ? seconds : `0${seconds}`
  }`;
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
    <Paper elevation={1}>
      <Box className={classes.centerBlock}>
        <div className={classes.topText}>
          {minutesAndSecondsFromTime(secondsRemaining)}
        </div>
        <Container className={classes.buttonsBlock}>
          <Tooltip title="Run Round" aria-label="Run Round">
            <Button
              className={classes.timerButton}
              onClick={handleStart}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<PlayCircleFilledWhiteIcon />}
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
        </Container>
      </Box>
    </Paper>
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
