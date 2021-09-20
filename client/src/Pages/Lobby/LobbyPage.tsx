import React, { useContext, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerContainer } from '../../components/PlayerContainer';
import { StartExitBtn } from '../../components/StartExitBtn';
import { Place } from '../../Shared/enums';
import { useLobbyPageStyles } from './LobbyPage.styled';
import { AppContext } from '../../App';

type Props = {
  link: string;
  isAdmin: boolean;
  view?: Place;
};

export const LobbyPage: React.FC<Props> = ({ link, isAdmin, view }) => {
  const classes = useLobbyPageStyles();
  const { appState, dispatch } = useContext(AppContext);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.nameGame}>
        <Typography variant="h6" align="center">
          Meeting room
        </Typography>
      </div>
      <StartExitBtn link={link} isAdmin={isAdmin} />
      <PlayerContainer
        playerId={appState.currentPlayer?.id}
        view={view}
        playersCards={appState.players}
        you={appState.currentPlayer}
        dispatch={dispatch}
      />
    </Container>
  );
};
