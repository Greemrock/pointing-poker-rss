import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useTextInputStyles } from './TextInput.styled';

export const TextInput: React.FC = () => {
  const classes = useTextInputStyles();
  return (
    <form className={classes.wrapForm} noValidate autoComplete="off">
      <TextField
        id="standard-text"
        label="message"
        className={classes.wrapText}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        <SendIcon />
      </Button>
    </form>
  );
};
