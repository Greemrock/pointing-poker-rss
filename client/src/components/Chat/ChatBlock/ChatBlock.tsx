import React, { useContext, useEffect, useRef } from 'react';
import { Container, Paper } from '@material-ui/core';
import { useChatBlockStyles } from './ChatBlock.styled';
import { TextInput } from '../TextInput/';
import { MessageLeft, MessageRight } from '../Message';
import { AppContext, MessageContext } from '../../../App';

type Props = {
  isOpenChat: boolean;
};

export const ChatBlock: React.FC<Props> = ({ isOpenChat }) => {
  const classes = useChatBlockStyles({ isOpenChat });
  const { messageState } = useContext(MessageContext);
  const { appState } = useContext(AppContext);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageState]);

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Paper className={classes.messagesBody}>
          <ul className={classes.wrapper}>
            {messageState.message.map((message) => {
              return message.id === appState.currentPlayer?.id ? (
                <MessageRight
                  key={message.id}
                  name={message.name}
                  surname={message.surname}
                  message={message.message}
                  timestamp={message.timestamp}
                  photoURL={message.image || ''}
                />
              ) : (
                <MessageLeft
                  key={message.id}
                  name={message.name}
                  surname={message.surname}
                  message={message.message}
                  timestamp={message.timestamp}
                  photoURL={message.image || ''}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </ul>
        </Paper>
        <TextInput />
      </Paper>
    </Container>
  );
};
