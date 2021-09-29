import React from 'react';
import { AppBar, Paper, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles';

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <div className={classes.topBlock}>
        <Paper className={classes.logoBlock} elevation={1}>
          <Typography className={classes.firstLetter}>p</Typography>
          <Typography className={classes.secondLetter}>p</Typography>
        </Paper>
      </div>
      <div className={classes.bottomBlock}></div>
    </AppBar>
  );
};
