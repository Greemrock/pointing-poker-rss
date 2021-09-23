import React from 'react';
import {
  AppBar,
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import { useStyles } from './Header.styles';

type Props = {
  isAuth: boolean;
  isOpenChat: boolean;
  setIsOpenChat: (open: boolean) => void;
};

export const Header: React.FC<Props> = ({
  isAuth,
  isOpenChat,
  setIsOpenChat,
}) => {
  const classes = useStyles();

  const handleClick = () => setIsOpenChat(!isOpenChat);
  return (
    <AppBar position="relative">
      <div className={classes.topBlock}>
        <Paper className={classes.logoBlock} elevation={1}>
          <Typography className={classes.firstLetter}>p</Typography>
          <Typography className={classes.secondLetter}>p</Typography>
        </Paper>
        {isAuth && (
          <Tooltip onClick={handleClick} title="Chat" aria-label="chat">
            <IconButton className={classes.chat}>
              <ChatIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <div className={classes.bottomBlock}></div>
    </AppBar>
  );
};
