import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Typography } from '@material-ui/core';

import { useStyles } from './PreloaderForForm.styles';

export const PreloaderForForm: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.preloaderBlock}>
      <Typography className={classes.loadingText}>Please wait ...</Typography>
      <CircularProgress size={50} thickness={4} />
    </Container>
  );
};
