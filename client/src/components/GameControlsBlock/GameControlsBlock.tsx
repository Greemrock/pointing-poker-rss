import React, { useContext, useState } from 'react';
import { Box, Button, Container, Paper, TextField } from '@material-ui/core';
import { useStartExitGameStyles } from './GameControlsBlock.styled';

export const GameControlsBlock: React.FC = () => {
  const classes = useStartExitGameStyles({ isAdmin: true });
  const [isRoundStarted, setIsRoundStarted] = useState(false);

  return (
    <Container className={classes.root} maxWidth="md">
      <Paper className={classes.link} component="div" elevation={2}>
        Timer
      </Paper>
      <div className={classes.container}>
        <Button variant="contained" color="primary">
          Prev Issue
        </Button>
        <Button variant="contained" color="primary">
          Next Issue
        </Button>
      </div>
      <Button variant="outlined" color="primary">
        Stop Game
      </Button>
    </Container>
  );
};
