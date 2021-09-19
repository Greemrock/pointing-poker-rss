import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';
import { Place, SizeCard } from '../../Shared/enums';
import { UsersActions } from '../../reducers/usersReducerInterfaces';

type Props = {
  playersCards: PlayerCard[];
  view?: Place;
  playerId: string | undefined;
  isAdmin: boolean;
  dispatch: React.Dispatch<UsersActions>;
};

export const PlayerContainer: React.FC<Props> = ({
  view,
  playersCards,
  playerId,
  isAdmin,
  dispatch,
}) => {
  const classes = usePlayerContainerStyles();

  return (
    <div className={classes.root}>
      {!view ? (
        <Typography variant="h6" align="center" className={classes.title}>
          Members:
        </Typography>
      ) : null}
      <Container className={classes.container} maxWidth="md">
        {playersCards.map(({ id, job, name, surname, image }) => {
          return (
            <PlayerCard
              key={id}
              id={id}
              job={job}
              name={name}
              surname={surname}
              image={image}
              playerId={playerId}
              size={view === Place.game ? SizeCard.small : undefined}
              removeUser={() => {
                if (isAdmin) () => isAdmin;
              }}
            />
          );
        })}
      </Container>
    </div>
  );
};
