import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  FormControlLabel,
  IconButton,
  Avatar,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import * as yup from 'yup';
import { useStyles, GreeenSwitch } from './WelcomeDialogForm.styles';
import { useFormik } from 'formik';
import { addUser } from '../../../api/usersRequests';

const validationSchema = yup.object({
  name: yup.string().required('First name is required'),
  surname: yup.string().required('Last name is required'),
  position: yup.string().required('Job position is required'),
});

type Props = {
  open: boolean;
  handleClose: () => void;
  isAdmin: boolean;
  gameId: string | null;
};

export const WelcomeFormDialog: FC<Props> = ({
  open,
  handleClose,
  isAdmin,
  gameId,
}) => {
  const welcomeDialogFormStyles = useStyles();
  const [file, setFile] = useState<File | null>();
  const [image, setImage] = useState<string | null>();
  const [isObserver, setIsObserver] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: 'First Name',
      surname: 'Second Name',
      position: 'Job position',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const payloadObject = {
        ...values,
        image,
        observer: isObserver,
        admin: isAdmin,
      };
      addUser(payloadObject);
    },
  });

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  }, [file]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsObserver(event.target.checked);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <Typography
        className={welcomeDialogFormStyles.welcomeDialogTitle}
        component="h3"
        variant="h3"
      >
        Connect to lobby
      </Typography>
      <form action="" autoComplete="off" onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First name"
            type="text"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            margin="dense"
            id="surname"
            label="Last Name"
            type="text"
            variant="outlined"
            fullWidth
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
          <TextField
            margin="dense"
            id="position"
            label="Job position"
            type="text"
            variant="outlined"
            fullWidth
            value={formik.values.position}
            onChange={formik.handleChange}
            error={formik.touched.position && Boolean(formik.errors.position)}
            helperText={formik.touched.position && formik.errors.position}
          />
          <FormControlLabel
            control={
              <GreeenSwitch
                checked={isObserver}
                onChange={handleChange}
                id="observer"
                name="observer"
              />
            }
            label="Connect as Observer"
          />
          <input
            accept="image/*"
            className={welcomeDialogFormStyles.photoInput}
            id="icon-button-file"
            type="file"
            onChange={(event) => {
              if (event.target.files) {
                const file = event.target.files[0];
                if (file) setFile(file);
                else setFile(null);
              }
            }}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          {image ? (
            <Avatar
              className={welcomeDialogFormStyles.avatar}
              src={image}
            ></Avatar>
          ) : (
            <Avatar className={welcomeDialogFormStyles.avatar}>{'HH'}</Avatar>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Subscribe
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
