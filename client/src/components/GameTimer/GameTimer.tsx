import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { useStyles } from './GameTimer.styles';

const minutesAndSecondsFromTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time - 60 * minutes;
  return `${minutes} ${seconds}`;
};

export const GameTimer: React.FC<{
  time: number;
}> = ({ time }) => {
  const classes = useStyles();
  const [seconds, setSeconds] = useState(time);

  const startTimer = () => {
    const timer = setInterval(() => {
      if (seconds === 0) clearInterval(timer);
      else setSeconds(seconds - 1);
    }, 1000);
  };
  return (
    <Paper elevation={1}>
      <Box className={classes.centerBlock}>
        <Button onClick={startTimer}>Start</Button>
        <div>{minutesAndSecondsFromTime(seconds)}</div>
      </Box>
    </Paper>
  );
};
