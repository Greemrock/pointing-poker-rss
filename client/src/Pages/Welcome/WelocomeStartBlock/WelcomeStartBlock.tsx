import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  welcomeStartBlock: {
    width: '60%',
  },
  welcomeStartAsDillerBlock: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10%',
  },
  welcomeStartAsPlayerBlock: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeStartForm: {
    width: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeStartHeading: {
    fontWeight: 700,
    color: '#66999b',
  },
  welcomeStartButton: {
    padding: theme.spacing(1),
    marginLeft: '-5px',
  },
}));

const WelcomeStartBlock: FC<{ isConnect: boolean }> = ({ isConnect }) => {
  const WelcomeStartStyles = useStyles();
  return (
    <Container className={WelcomeStartStyles.welcomeStartBlock}>
      <Typography
        className={WelcomeStartStyles.welcomeStartHeading}
        component="h4"
        variant="h4"
        align="center"
        gutterBottom
      >
        {!isConnect ? 'Start your planning' : 'Or'}:{' '}
      </Typography>
      {!isConnect ? (
        <Container className={WelcomeStartStyles.welcomeStartAsDillerBlock}>
          <Typography>Create session: </Typography>
          <Button variant="contained" color="primary">
            Start new game
          </Button>
        </Container>
      ) : (
        <Container className={WelcomeStartStyles.welcomeStartAsPlayerBlock}>
          <Typography gutterBottom>Connect to lobby by Id: </Typography>
          <form
            className={WelcomeStartStyles.welcomeStartForm}
            action=""
            autoComplete="off"
          >
            <TextField
              label="Id"
              size="small"
              variant="outlined"
              required
              type="text"
            ></TextField>
            <Button
              className={WelcomeStartStyles.welcomeStartButton}
              variant="contained"
              color="primary"
              disableElevation
            >
              Connect
            </Button>
          </form>
        </Container>
      )}
    </Container>
  );
};
export default WelcomeStartBlock;
