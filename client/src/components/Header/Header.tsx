import React from 'react';
import { AppBar, Paper, Typography, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import { useStyles } from './Header.styles';

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <div className={classes.topBlock}>
          <Paper className={classes.logoBlock} elevation={1}>
            <Typography className={classes.firstLetter}>p</Typography>
            <Typography className={classes.secondLetter}>p</Typography>
          </Paper>
          <IconButton className={classes.chat}>
            <ChatIcon />
          </IconButton>
        </div>
        <div className={classes.bottomBlock}></div>
      </AppBar>
    </div>
  );
};
