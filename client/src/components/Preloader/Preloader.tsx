import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Typography } from '@material-ui/core';
import { SPACE_LG, SPACE_SM } from '../../Shared/cssConstants';

const useStyles = makeStyles((theme) => ({
  preloaderBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: `${SPACE_LG} 0`,
  },
  loadingText: {
    marginBottom: SPACE_SM,
  },
}));

export const PreloaderForForm: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.preloaderBlock}>
      <Typography className={classes.loadingText}>Please wait ...</Typography>
      <CircularProgress />
    </Container>
  );
};
