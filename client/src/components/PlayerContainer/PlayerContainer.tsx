import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';
import { Place, SizeCard } from '../../Shared/enums';
import { UsersActions } from '../../reducers/usersReducerInterfaces';
import { RemoveUserActionCreator } from '../../reducers/usersActionCreators';

type Props = {
  playersCards: PlayerCard[];
  view?: Place;
  playerId: number;
  dispatch: React.Dispatch<UsersActions>;
};

export const PlayerContainer: React.FC<Props> = ({
  view,
  playersCards,
  playerId,
  dispatch,
}) => {
  const classes = usePlayerContainerStyles();

  const removeUserHandler = (id: number) => {
    dispatch(RemoveUserActionCreator(id));
  };
  return (
    <div className={classes.root}>
      {!view ? (
        <Typography variant="h6" align="center" className={classes.title}>
          Members:
        </Typography>
      ) : null}
      <Container className={classes.container} maxWidth="md">
        {playersCards.map(({ id, job, name, surname }) => {
          return (
            <PlayerCard
              key={id}
              id={id}
              job={job}
              name={name}
              surname={surname}
              playerId={playerId}
              size={view === Place.game ? SizeCard.small : undefined}
              removeUser={() => {
                removeUserHandler(playerId);
              }}
            />
          );
        })}
      </Container>
    </div>
  );
};
