import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { PlayerContainer } from '../../components/PlayerContainer';
import { StartExitBtn } from '../../components/StartExitBtn';
import { Issue } from '../../Shared/enums';
import { useLobbyPageStyles } from './LobbyPage.styled';
import { UsersContext } from '../../context/';
import { Settings } from '../../components/Settings';
import { IssueContainer } from '../../components/Issue/IssueContainer';
import { socket } from '../../api/playersRequests';
import {
  AuthActionCreator,
  StartGameActionCreator,
} from '../../reducers/users';

export const LobbyPage: React.FC = () => {
  const classes = useLobbyPageStyles();
  const {
    appState: { isAuth, currentPlayer, isGameStarted },
    dispatch,
  } = useContext(UsersContext);

  useEffect(() => {
    socket.off('isGameStarted');
    socket.on('isGameStarted', () => {
      dispatch(StartGameActionCreator());
    });
  });

  useEffect(() => {
    socket.off('adminLeft');
    socket.on('adminLeft', () => {
      dispatch(AuthActionCreator(false));
    });
  });

  return (
    <>
      {!isAuth && <Redirect to="/" />}
      {isGameStarted && <Redirect to="/game" />}
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.nameGame}>
          <Typography variant="h6" align="center">
            Meeting room
          </Typography>
        </div>
        <StartExitBtn />
        <PlayerContainer />
        {currentPlayer.isAdmin && (
          <>
            <IssueContainer view={Issue.update} />
            <Settings />
          </>
        )}
      </Container>
    </>
  );
};
