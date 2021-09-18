import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { useChatBlockStyles } from './ChatBlock.styled';
import { TextInput } from '../TextInput/';
import { MessageLeft, MessageRight } from '../Message';

export const ChatBlock: React.FC = () => {
  const classes = useChatBlockStyles();
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Paper className={classes.messagesBody}>
          <MessageLeft
            message="Hi"
            timestamp="00:00"
            photoURL=""
            displayName="Bonny"
          />
          <MessageLeft
            message="Hi! How are you?"
            timestamp="00:00"
            photoURL=""
            displayName="Andrey"
          />
          <MessageRight
            message="Fine)"
            timestamp="00:00"
            photoURL=""
            displayName="Blane"
          />
          <MessageRight
            message="^_^"
            timestamp="00:00"
            photoURL=""
            displayName="Blane"
          />
          <MessageRight
            message="^_^"
            timestamp="00:00"
            photoURL=""
            displayName="Blane"
          />
        </Paper>
        <TextInput />
      </Paper>
    </Container>
  );
};
