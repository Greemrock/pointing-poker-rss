import React from 'react';
import { Button, Container, Paper, TextField } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useStartExitGameStyles } from './StartExitBtn.styled';

type Props = {
  isAdmin: boolean;
  link: string;
};

export const StartExitBtn: React.FC<Props> = ({ isAdmin, link }) => {
  const classes = useStartExitGameStyles({ isAdmin });
  return (
    <Container className={classes.root} maxWidth="md">
      {isAdmin ? (
        <Paper className={classes.link} component="div" elevation={2}>
          <TextField
            label="Link to lobby"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            value={link}
          />
          <Button
            className={classes.btn}
            type="button"
            aria-label="copy"
            variant="contained"
            color="primary"
            onClick={() => navigator.clipboard.writeText(link)}
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
