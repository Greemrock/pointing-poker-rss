import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, Drawer, Fab, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
import { useChatBlockStyles } from './ChatBlock.styled';
import { TextInput } from '../TextInput/';
import { MessageLeft, MessageRight } from '../Message';
import { AppContext } from '../../../App';
import { MessageContext } from '../../../context';

export const ChatBlock: React.FC = () => {
  const classes = useChatBlockStyles();
  const { messageState } = useContext(MessageContext);
  const {
    appState: { currentPlayer, isAuth },
  } = useContext(AppContext);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageState]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  const [open, setOpen] = useState(false);
  return (
    <>
      {isAuth && (
        <Fab
          onClick={toggleDrawer(true)}
          color="primary"
          aria-label="add"
          className={classes.btnChat}
        >
          <ChatIcon />
        </Fab>
      )}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box role="presentation" className={classes.container}>
          <Paper className={classes.paper} elevation={3}>
            <Paper className={classes.messagesBody}>
              <Button
                color="secondary"
                fullWidth
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </Button>
              <ul className={classes.wrapper}>
                {messageState.message.map((message, key) => {
                  return message.id === currentPlayer?.id ? (
                    <MessageRight
                      key={key}
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
        </Box>
      </Drawer>
    </>
  );
};
