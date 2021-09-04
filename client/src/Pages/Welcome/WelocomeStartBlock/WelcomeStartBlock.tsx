import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import WelcomeFormDialog from '../WelcomeDialogForm/WelcomeDialogForm';
import { useFormik } from 'formik';
import * as yup from 'yup';

const startHeadingColor = '#66999b';

const useStyles = makeStyles((theme) => ({
  welcomeStartBlock: {
    width: '100%',
  },
  welcomeStartAsDillerBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  welcomeStartAsDillerButton: {
    marginLeft: '2%',
  },
  welcomeStartAsPlayerBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeStartForm: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  welcomeStartHeading: {
    fontWeight: 700,
    color: startHeadingColor,
  },
  welcomeStartButton: {
    padding: theme.spacing(1),
    marginLeft: '-5px',
  },
}));
const validationSchema = yup.object({
  id: yup.string().required('Id is required'),
});

const WelcomeStartBlock: FC<{ isConnect: boolean }> = ({ isConnect }) => {
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
              <TextField
                label="Id"
                id="id"
                size="small"
                variant="outlined"
                type="text"
                value={formik.values.id}
                onChange={formik.handleChange}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              ></TextField>
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
export default WelcomeStartBlock;
