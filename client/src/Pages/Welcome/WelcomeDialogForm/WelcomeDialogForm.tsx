import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
  FormControlLabel,
  Switch,
  withStyles,
  IconButton,
  Avatar,
} from '@material-ui/core';
import { blue, lightGreen } from '@material-ui/core/colors';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  welcomeDialogTitle: {
    margin: theme.spacing(1),
    fontWeight: 700,
  },
  photoInput: {
    display: 'none',
  },
  avatar: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const GreeenSwitch = withStyles({
  switchBase: {
    color: lightGreen[300],
    '&$checked': {
      color: lightGreen[500],
    },
    '&$checked + $track': {
      backgroundColor: lightGreen[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const WelcomeFormDialog: FC<Props> = ({ open, handleClose }) => {
  const welcomeDialogFormStyles = useStyles();
  const [file, setFile] = useState<File | null>();
  const [avatarSrc, setAvatarSrc] = useState<string | null>();
  const [isObserver, setIsObserver] = useState(false);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarSrc(null);
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
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="fname"
          label="First Name"
          type="text"
          variant="outlined"
          fullWidth
        />
        <TextField
          margin="dense"
          id="lname"
          label="Last Name"
          type="text"
          variant="outlined"
          fullWidth
        />
        <TextField
          margin="dense"
          id="position"
          label="Job position"
          type="text"
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={
            <GreeenSwitch
              checked={isObserver}
              onChange={handleChange}
              name="isObserver"
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
        {avatarSrc ? (
          <Avatar
            className={welcomeDialogFormStyles.avatar}
            src={avatarSrc}
          ></Avatar>
        ) : (
          <Avatar className={welcomeDialogFormStyles.avatar}>{'HH'}</Avatar>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};
