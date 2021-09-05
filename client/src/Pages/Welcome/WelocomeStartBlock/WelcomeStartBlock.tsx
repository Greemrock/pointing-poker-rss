import {
  Button,
  Container,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import { WelcomeFormDialog } from '../WelcomeDialogForm/';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useStyles } from './WelocmeStartBlockStyles';

const validationSchema = yup.object({
  id: yup.string().required('Id is required'),
});
const CustomizedBorderTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
        borderWidth: '1px',
      },
    },
  },
})(TextField);

export const WelcomeStartBlock: FC<{ isConnect: boolean }> = ({
  isConnect,
}) => {
  const [open, setOpen] = useState(false);
  const welcomeStartStyles = useStyles();

  const formik = useFormik({
    initialValues: {
      id: 'test',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      handleClickOpen();
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Container className={welcomeStartStyles.welcomeStartBlock}>
        <Typography
          className={welcomeStartStyles.welcomeStartHeading}
          component="h4"
          variant="h4"
          align="center"
          gutterBottom
        >
          {!isConnect ? 'Start your planning' : 'Or'}:{' '}
        </Typography>
        {!isConnect ? (
          <Container
            className={welcomeStartStyles.welcomeStartAsDillerBlock}
            component="div"
          >
            <Typography>Create session: </Typography>
            <Button
              className={welcomeStartStyles.welcomeStartAsDillerButton}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Start new game
            </Button>
          </Container>
        ) : (
          <Container className={welcomeStartStyles.welcomeStartAsPlayerBlock}>
            <Typography gutterBottom>Connect to lobby by Id: </Typography>
            <form
              className={welcomeStartStyles.welcomeStartForm}
              action=""
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <CustomizedBorderTextField
                label="Id"
                id="id"
                size="small"
                variant="outlined"
                type="text"
                value={formik.values.id}
                onChange={formik.handleChange}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              ></CustomizedBorderTextField>
              <Button
                className={welcomeStartStyles.welcomeStartButton}
                variant="contained"
                color="primary"
                disableElevation
                type="submit"
              >
                Connect
              </Button>
            </form>
          </Container>
        )}
      </Container>
      <WelcomeFormDialog open={open} handleClose={handleClose} />
    </div>
  );
};
