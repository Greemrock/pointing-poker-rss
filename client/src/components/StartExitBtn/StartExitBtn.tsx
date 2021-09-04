import React from 'react';
import { Button, Container, Paper, TextField } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useStartExitGameStyles } from './StartExitBtn.styled';

interface IStartExitGame {
  isAdmin: boolean;
}

export const StartExitBtn: React.FC<IStartExitGame> = ({ isAdmin }) => {
  const classes = useStartExitGameStyles({ isAdmin });
  return (
    <Container className={classes.root}>
      {isAdmin ? (
        <Paper className={classes.link} component="div" elevation={2}>
          <TextField
            className={classes.input}
            label="Link to lobby"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            value={'./default_link/#1'}
          />
          <Button
            className={classes.btn}
            type="button"
            aria-label="copy"
            variant="contained"
            color="primary"
            startIcon={<FileCopyIcon />}
          >
            copy
          </Button>
        </Paper>
      ) : null}
      <div className={classes.container}>
        {isAdmin ? (
          <Button variant="contained" color="primary">
            Start
          </Button>
        ) : null}
        <Button variant="outlined" color="secondary">
          Exit
        </Button>
      </div>
    </Container>
  );
};
