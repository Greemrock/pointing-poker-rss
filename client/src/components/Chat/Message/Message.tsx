import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useMessageStyles } from './Message.styled';
import { Container, Paper, Typography } from '@material-ui/core';
import { getInitialLetters } from '../../../Util/getInitialLetters';

type Props = {
  name: string;
  surname: string;
  message: string;
  photoURL: string;
  timestamp: () => string;
};

export const MessageLeft: React.FC<Props> = ({
  name,
  surname,
  message,
  photoURL,
  timestamp,
}) => {
  const classes = useMessageStyles();
  return (
    <Container component="li" className={classes.messageRow}>
      <Avatar alt={name} className={classes.avatar} src={photoURL}>
        {getInitialLetters(name, surname)}
      </Avatar>
      <div>
        <Typography
          className={classes.displayName}
        >{`${name} ${surname}`}</Typography>
        <Paper elevation={0} className={classes.messageLeft}>
          <Typography variant="body2" className={classes.messageContent}>
            {message}
          </Typography>
          <Typography variant="caption">{timestamp()}</Typography>
        </Paper>
      </div>
    </Container>
  );
};

export const MessageRight: React.FC<Props> = ({
  name,
  surname,
  message,
  timestamp,
  photoURL,
}) => {
  const classes = useMessageStyles();
  return (
    <Container component="li" className={classes.messageRowRight}>
      <div>
        <Typography className={classes.displayNameRight}>
          {`${name} ${surname}`}
        </Typography>
        <Paper elevation={0} className={classes.messageRight}>
          <Typography variant="body2" className={classes.messageContent}>
            {message}
          </Typography>
          <Typography variant="caption">{timestamp()}</Typography>
        </Paper>
      </div>
      <Avatar alt={name} className={classes.avatar} src={photoURL}>
        {getInitialLetters(name, surname)}
      </Avatar>
    </Container>
  );
};
