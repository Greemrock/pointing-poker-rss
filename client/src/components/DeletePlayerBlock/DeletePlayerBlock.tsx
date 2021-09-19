import React, { useState } from 'react';
import {
  Typography,
  Dialog,
  DialogActions,
  Button,
  Container,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useStyles } from './DeletePlayerBlock.styles';

type Props = {
  isAdmin: boolean;
  snitch: string | null;
  rogue: string;
  isOpen: boolean;
};

export const DeletePlayerBlock: React.FC<Props> = ({
  isAdmin,
  rogue,
  snitch,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const [isKick, setIsKick] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      isKick: false,
    },
    onSubmit: () => {
      setIsKick(true);
      const payloadObject = {
        isKick,
      };
      handleClose();
    },
  });
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <Container className={classes.boxBlock}>
        <Typography className={classes.heding} component="h4" variant="h4">
          Kick
        </Typography>
        {isAdmin ? (
          <Typography className={classes.textBlock} component="h6" variant="h6">
            Are you really want to remove player{' '}
            <span className={classes.nameSpan}>{rogue}</span>from game session?
          </Typography>
        ) : (
          <Typography className={classes.textBlock} component="h6" variant="h6">
            <span className={classes.nameSpan}> {snitch} </span> want to kick
            member <span className={classes.nameSpan}>{rogue}</span>. Do you
            agree with it?
          </Typography>
        )}
        <Typography className={classes.textBlock} component="h6" variant="h6">
          <span className={classes.nameSpan}> {snitch} </span> want to kick
          member <span className={classes.nameSpan}>{rogue}</span>. Do you agree
          with it?
        </Typography>
      </Container>
      <form action="" autoComplete="off" onSubmit={formik.handleSubmit}>
        <DialogActions className={classes.buttonsBlock}>
          <Button color="primary" variant="contained" type="submit">
            Yes
          </Button>
          <Button onClick={handleClose} color="secondary" variant="contained">
            No
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
