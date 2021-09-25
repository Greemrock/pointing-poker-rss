import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useScoreCardStyles } from './ScoreCard.styled';

type Props = {
  score: string;
};

export const ScoreCard: React.FC<Props> = ({ score }) => {
  const classes = useScoreCardStyles();
  return (
    <Paper elevation={3} className={classes.field}>
      <Typography className={classes.userPointer} align="center">
        {score || '-'}
      </Typography>
    </Paper>
  );
};
