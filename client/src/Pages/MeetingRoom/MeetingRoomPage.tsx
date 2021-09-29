import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Container, Typography } from '@material-ui/core';
import { useMeetingRoomPageStyles } from './MeetingRoomPage.styled';
import { VoteGraph } from '../../components/VoteGraph';
import { UsersContext } from '../../context/';

export const MeetingRoomPage: React.FC = () => {
  const classes = useMeetingRoomPageStyles();
  const {
    appState: { isAuth, currentPlayer, players },
    dispatch,
  } = useContext(UsersContext);
  return (
    <>
      {!isAuth && <Redirect to="/" />}
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.nameGame}>
          <Typography variant="h6" align="center">
            Meeting room
          </Typography>
        </div>
        <VoteGraph />
      </Container>
    </>
  );
};
