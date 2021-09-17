import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerContainer } from '../../components/PlayerContainer';
import { StartExitBtn } from '../../components/StartExitBtn';
import { Place } from '../../Shared/enums';
import { useLobbyPageStyles } from './LobbyPage.styled';
import { AppContext } from '../../App';

type Props = {
  link: string;
  isAdmin: boolean;
  playerId: number;
  view?: Place;
};

export const LobbyPage: React.FC<Props> = ({
  link,
  isAdmin,
  playerId,
  view,
}) => {
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
        playerId={playerId}
        view={view}
        playersCards={appState.players}
        dispatch={dispatch}
      />
    </Container>
  );
};
