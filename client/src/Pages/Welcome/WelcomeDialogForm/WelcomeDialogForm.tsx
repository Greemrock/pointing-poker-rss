import React, { FC, useContext, useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  FormControlLabel,
  IconButton,
} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import * as yup from 'yup';
import { useStyles, GreeenSwitch } from './WelcomeDialogForm.styles';
import { useFormik } from 'formik';
import { FormAvatar } from '../FormAvatar/FormAvatar';
import { postImage } from '../../../api/imgbbRequest';
import {
  handleAdminSubmit,
  handleUserSubmit,
  socket,
} from '../../../api/playersRequests';
import { PreloaderForForm } from '../../../components/PreloaderForForm';
import { AppContext } from '../../../App';
import {
  AddUserActionCreator,
  AuthActionCreator,
  ReloadUsersActionCreator,
} from '../../../reducers/usersActionCreators';
import { UsersActions } from '../../../reducers/usersReducerInterfaces';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('First name is required')
    .test('alphabets', 'First name must only contain alphabets', (value) => {
      return value ? /^[A-Za-z]+$/.test(value) : false;
    }),
  surname: yup
    .string()
    .required('Last name is required')
    .test('alphabets', 'Last must only contain alphabets', (value) => {
      return value ? /^[A-Za-z]+$/.test(value) : false;
    }),
  job: yup
    .string()
    .required('Job position is required')
    .test(
      'alphabets',
      'Position must only contain alphabets and spaces',
      (value) => {
        return value ? /^[A-Za-z ]+$/.test(value) : false;
      }
    ),
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
  const [isLoading, setIsLoading] = useState(false);
  const [isObserver, setIsObserver] = useState(false);
  const { appState, dispatch } = useContext(AppContext);

  const sendPalyerDataWithWS = (
    dispatch: React.Dispatch<UsersActions>,
    handleClose: () => void,
    setIsLoading: (value: React.SetStateAction<boolean>) => void,
    payloadObject: payloadType
  ) => {
    if (isAdmin) {
      handleAdminSubmit(payloadObject);
    } else {
      payloadObject.roomId = gameId;
      handleUserSubmit(payloadObject);
    }
    socket.on('roomInfo', (userInfo, roomInfo) => {
      dispatch(AuthActionCreator());
      dispatch(AddUserActionCreator(userInfo));
      dispatch(ReloadUsersActionCreator(roomInfo.users));
      handleClose();
      setIsLoading(false);
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      job: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      const payloadObject = {
        ...values,
        image: '',
        observer: isObserver,
        isAdmin,
        roomId: null,
      };
      if (image) {
        postImage(image).then((response) => {
          if (response) {
            payloadObject.image = response;
            sendPalyerDataWithWS(
              dispatch,
              handleClose,
              setIsLoading,
              payloadObject
            );
          }
        });
      } else {
        sendPalyerDataWithWS(
          dispatch,
          handleClose,
          setIsLoading,
          payloadObject
        );
      }
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
      {isLoading ? (
        <PreloaderForForm />
      ) : (
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
              id="job"
              label="Job position"
              type="text"
              variant="outlined"
              fullWidth
              value={formik.values.job}
              onChange={formik.handleChange}
              error={formik.touched.job && Boolean(formik.errors.job)}
              helperText={formik.touched.job && formik.errors.job}
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
            <FormAvatar
              image={image}
              avatarCSSClass={welcomeDialogFormStyles.avatar}
              name={formik.values.name}
              surname={formik.values.surname}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" type="submit">
              Subscribe
            </Button>
            <Button onClick={handleClose} color="secondary" variant="contained">
              Cancel
            </Button>
          </DialogActions>
        </form>
      )}
    </Dialog>
  );
};
