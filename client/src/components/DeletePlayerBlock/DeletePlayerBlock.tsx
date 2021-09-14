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
  snitch: string;
  rogue: string;
};

export const DeletePlayerBlock: React.FC<Props> = ({ snitch, rogue }) => {
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
        <Typography className={classes.textBlock} component="h6" variant="h6">
          <span className={classes.nameSpan}> {snitch} </span> want to kick
          member <span className={classes.nameSpan}>{rogue}</span>. Do you agree
          with it?
        </Typography>
      </Container>
      <form action="" autoComplete="off" onSubmit={formik.handleSubmit}>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            No
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Yes
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
