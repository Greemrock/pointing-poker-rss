import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, Drawer, Fab, Paper, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
import { useChatBlockStyles } from './ChatBlock.styled';
import { TextInput } from '../TextInput/';
import { MessageLeft, MessageRight } from '../Message';
import { UsersContext } from '../../../context/';
import { MessageContext } from '../../../context';

export const ChatBlock: React.FC = () => {
  const classes = useChatBlockStyles();
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const { messageState } = useContext(MessageContext);
  const {
    appState: { isAuth, currentPlayer },
  } = useContext(UsersContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

  useEffect(() => {
    scrollToBottom();
  }, [messageState]);

  return (
    <>
      {isAuth && (
        <Tooltip title="Chat" placement="left">
          <Fab
            onClick={toggleDrawer(true)}
            color="secondary"
            aria-label="add"
            className={classes.btnChat}
          >
            <ChatIcon />
          </Fab>
        </Tooltip>
      )}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box role="presentation" className={classes.container}>
          <div className={classes.paper}>
            <div className={classes.messagesBody}>
              <Button
                color="secondary"
                variant="outlined"
                fullWidth
                onClick={() => setOpen(false)}
                endIcon={<CloseIcon />}
              />
              <Paper
                component="ul"
                variant="outlined"
                className={classes.wrapper}
              >
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
              </Paper>
            </div>
            <TextInput />
          </div>
        </Box>
      </Drawer>
    </>
  );
};
