import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useTextInputStyles } from './TextInput.styled';
import { Field, Form, Formik } from 'formik';
import {
  handleMessageSubmit,
  payloadMessage,
  socket,
} from '../../../api/playersRequests';
import { AppContext, MessageContext } from '../../../App';
import { TextField } from 'formik-material-ui';
import { AddMessageAction } from '../../../reducers/message/msg.type';
import { AddMessageActionCreator } from '../../../reducers/message/msg.create-action';
import { getDate } from '../../../Util/getDate';

export const TextInput: React.FC = () => {
  const {
    appState: { currentPlayer },
  } = useContext(AppContext);
  const classes = useTextInputStyles();
  const { messageState, messageDispatch } = useContext(MessageContext);
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (currentPlayer) {
          const payloadObject = {
            ...values,
            id: currentPlayer.id,
            name: currentPlayer.name,
            surname: currentPlayer.surname,
            image: currentPlayer.image,
            roomId: currentPlayer.roomId,
          };
          if (values.message.length) {
            handleMessageSubmit(payloadObject);
            socket.on('msgToClient', (data) => {
              messageDispatch(
                AddMessageActionCreator({ ...data, timestamp: getDate() })
              );
              setSubmitting(false);
              resetForm();
            });
          } else {
            setSubmitting(false);
          }
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classes.wrapForm}>
          <Field
            fullWidth
            component={TextField}
            type="text"
            name="message"
            label="message"
            className={classes.wrapText}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            className={classes.button}
          >
            <SendIcon />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
