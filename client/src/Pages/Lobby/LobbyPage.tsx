import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { PlayerContainer } from '../../components/PlayerContainer';
import { StartExitBtn } from '../../components/StartExitBtn';
import { Place } from '../../Shared/enums';
import { useLobbyPageStyles } from './LobbyPage.styled';

type Props = {
  link: string;
  isAdmin: boolean;
  playerId: number;
  view?: Place;
  playersCards: PlayerCard[];
};

export const LobbyPage: React.FC<Props> = ({
  link,
  isAdmin,
  playerId,
  view,
  playersCards,
}) => {
  const classes = useLobbyPageStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.nameGame}>
        <Typography variant="h6" align="center">
          Meeting room
        </Typography>
      </div>
      <StartExitBtn link={link} isAdmin={isAdmin} />
      <PlayerContainer
        playerId={playerId}
        view={view}
        playersCards={playersCards}
      />
    </Container>
  );
};
