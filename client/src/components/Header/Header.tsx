import React from 'react';
import { AppBar } from '@material-ui/core';
import { useStyles } from './Header.styles';

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <div className={classes.topBlock}></div>
    </AppBar>
  );
};
