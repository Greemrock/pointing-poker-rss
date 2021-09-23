import React, { useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTextInputStyles } from './TextInput.styled';
import { AppContext } from '../../../context/index';
import { getDate } from '../../../Util/getDate';
import { handleMessageSubmit } from '../../../api/message';
import { socket } from '../../../api/playersRequests';
import { AddMessageActionCreator } from '../../../reducers/message';
import { MessageContext } from '../../../context';

export const TextInput: React.FC = () => {
  const {
    appState: { currentPlayer },
  } = useContext(AppContext);
  const classes = useTextInputStyles();
  const { messageDispatch } = useContext(MessageContext);

  useEffect(() => {
    socket.off('msgToClient');
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
          >
            <SendIcon />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
