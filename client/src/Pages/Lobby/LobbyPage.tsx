import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { PlayerContainer } from '../../components/PlayerContainer';
import { StartExitBtn } from '../../components/StartExitBtn';
import { Issue, Place } from '../../Shared/enums';
import { useLobbyPageStyles } from './LobbyPage.styled';
import { UsersContext } from '../../context/';
import { Settings } from '../../components/Settings';
import { IssueContainer } from '../../components/Issue/IssueContainer';

type Props = {
  link: string;
  view?: Place;
};

export const LobbyPage: React.FC<Props> = ({ link, view }) => {
  const classes = useLobbyPageStyles();
  const {
    appState: { isAuth, currentPlayer },
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
        <StartExitBtn link={link} isAdmin={currentPlayer.isAdmin} />
        <PlayerContainer view={view} />
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
