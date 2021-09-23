import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useScoreCardStyles } from './ScoreCard.styled';

export const ScoreCard: React.FC = () => {
  const classes = useScoreCardStyles();
  return (
    <Paper elevation={3} className={classes.field}>
      <Typography className={classes.userPointer}>{'In progress'}</Typography>
    </Paper>
  );
};
