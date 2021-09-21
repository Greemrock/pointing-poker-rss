import React, { useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useTextInputStyles } from './TextInput.styled';
import { Field, Form, Formik } from 'formik';
import { AppContext, MessageContext } from '../../../App';
import { TextField } from 'formik-material-ui';
import { AddMessageActionCreator } from '../../../reducers/message/msg.create-action';
import { getDate } from '../../../Util/getDate';
import { handleMessageSubmit } from '../../../api/message';
import { socket } from '../../../api/playersRequests';

export const TextInput: React.FC = () => {
  const {
    appState: { currentPlayer },
  } = useContext(AppContext);
  const classes = useTextInputStyles();
  const { messageDispatch } = useContext(MessageContext);

  useEffect(() => {
    socket.on('msgToClient', (data) => {
      messageDispatch(
        AddMessageActionCreator({ ...data, timestamp: getDate() })
      );
    });
  });
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const payloadObject = {
          ...values,
          id: currentPlayer.id,
          name: currentPlayer.name,
          surname: currentPlayer.surname,
          image: currentPlayer.image,
          roomId: currentPlayer.roomId,
        };
        values.message.length && handleMessageSubmit(payloadObject);
        setSubmitting(false);
        resetForm();
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
