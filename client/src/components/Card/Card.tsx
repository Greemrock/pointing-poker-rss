import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { useStyles } from './Card.styles';
import { QuestionIconComponent } from './QuestionIconComponent';
import { CoffeIconComponent } from './CoffeIconComponent';

export const Card: React.FC<{ value: string }> = ({ value }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.cardBlock}>
      <Typography className={classes.topText}>{value}</Typography>
      <Box className={classes.centerBlock}>
        {value === '?' ? (
          <QuestionIconComponent />
        ) : value === 'Pass' ? (
          <CoffeIconComponent />
        ) : (
          <Typography>{value}</Typography>
        )}
      </Box>

      <Typography className={classes.bottomText}>SP</Typography>
    </Paper>
  );
};
