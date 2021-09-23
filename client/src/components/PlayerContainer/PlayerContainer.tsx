import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';
import { Place, SizeCard } from '../../Shared/enums';
import { Player, UsersActions } from '../../reducers/usersReducerInterfaces';
import { socket } from '../../api/playersRequests';
import { ReloadUsersActionCreator } from '../../reducers/usersActionCreators';
import { AppContext } from '../../App';

type Props = {
  playersCards: PlayerCard[];
  view?: Place;
};

export const PlayerContainer: React.FC<Props> = ({ view, playersCards }) => {
  const classes = usePlayerContainerStyles();
  const {
    appState: { isAuth, currentPlayer, players },
    dispatch,
  } = useContext(AppContext);

  socket.on('roomInfo', (roomInfo) => {
    dispatch(ReloadUsersActionCreator(roomInfo.users));
  });

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center" className={classes.title}>
        Members:
      </Typography>
      <Container className={classes.container} maxWidth="md">
        {playersCards.map(({ id, job, name, surname, image, isAdmin }) => {
          return (
            <PlayerCard
              key={id}
              id={id}
              job={job}
              name={name}
              surname={surname}
              image={image}
              playerId={currentPlayer.id}
              isAdmin={isAdmin}
              size={view === Place.game ? SizeCard.small : undefined}
              removeUser={() => {
                if (currentPlayer.isAdmin) () => isAdmin;
              }}
            />
          );
        })}
      </Container>
    </div>
  );
};
