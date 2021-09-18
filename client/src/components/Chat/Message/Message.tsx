import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useMessageStyles } from './Message.styled';
import { Container, Paper, Typography } from '@material-ui/core';

type Props = {
  message: string;
  timestamp: string;
  photoURL: string;
  displayName: string;
};

export const MessageLeft: React.FC<Props> = ({
  message,
  timestamp,
  photoURL,
  displayName,
}) => {
  const classes = useMessageStyles();
  return (
    <Container className={classes.messageRow}>
      <Avatar
        alt={displayName}
        className={classes.avatar}
        src={photoURL}
      ></Avatar>
      <div>
        <Typography className={classes.displayName}>{displayName}</Typography>
        <Paper elevation={0} className={classes.messageLeft}>
          <Typography variant="body2" className={classes.messageContent}>
            {message}
          </Typography>
          <Typography variant="caption">{timestamp}</Typography>
        </Paper>
      </div>
    </Container>
  );
};

export const MessageRight: React.FC<Props> = ({
  message,
  timestamp,
  displayName,
  photoURL,
}) => {
  const classes = useMessageStyles();
  return (
    <Container className={classes.messageRowRight}>
      <div>
        <Typography className={classes.displayNameRight}>
          {displayName}
        </Typography>
        <Paper elevation={0} className={classes.messageRight}>
          <Typography variant="body2" className={classes.messageContent}>
            {message}
          </Typography>
          <Typography variant="caption">{timestamp}</Typography>
        </Paper>
      </div>
      <Avatar
        alt={displayName}
        className={classes.avatar}
        src={photoURL}
      ></Avatar>
    </Container>
  );
};
