import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerContainer } from '../../components/PlayerContainer';
import { StartExitBtn } from '../../components/StartExitBtn';
import { Place } from '../../Shared/enums';
import { useLobbyPageStyles } from './LobbyPage.styled';
import { AppContext } from '../../App';
import { Redirect } from 'react-router-dom';

type Props = {
  link: string;
  view?: Place;
};

export const LobbyPage: React.FC<Props> = ({ link, view }) => {
  const classes = useLobbyPageStyles();
  const {
    appState: { isAuth, currentPlayer, players },
    dispatch,
  } = useContext(AppContext);

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
        <PlayerContainer
          view={view}
          playersCards={players}
          currentPlayer={currentPlayer}
          dispatch={dispatch}
        />
      </Container>
    </>
  );
};
