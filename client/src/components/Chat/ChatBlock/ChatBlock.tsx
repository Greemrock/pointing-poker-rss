import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { useChatBlockStyles } from './ChatBlock.styled';
import { TextInput } from '../TextInput/';
import { MessageLeft, MessageRight } from '../Message';
import { getDate } from '../../../Util/getDate';

type Props = {
  isOpenChat: boolean;
};

export const ChatBlock: React.FC<Props> = ({ isOpenChat }) => {
  const classes = useChatBlockStyles({ isOpenChat });
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Paper component="ul" className={classes.messagesBody}>
          <MessageLeft
            name={'andrey'}
            surname={'f'}
            message="Hi! How are you?"
            timestamp={getDate}
            photoURL=""
          />
          <MessageRight
            name={'andrey'}
            surname={'f'}
            message="Fine)"
            timestamp={getDate}
            photoURL=""
          />
        </Paper>
        <TextInput />
      </Paper>
    </Container>
  );
};
