import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useScoreCardStyles } from './ScoreCard.styled';
import HourglassIcon from '@material-ui/icons/HourglassEmptyTwoTone';

type Props = {
  score?: string;
  isWaiting: boolean;
};

export const ScoreCard: React.FC<Props> = ({ score, isWaiting }) => {
  const classes = useScoreCardStyles();
  return (
    <Paper elevation={3} className={classes.field}>
      {!isWaiting ? (
        <Typography className={classes.userPointer} align="center">
          {score || '-'}
        </Typography>
      ) : (
        <HourglassIcon />
      )}
    </Paper>
  );
};
