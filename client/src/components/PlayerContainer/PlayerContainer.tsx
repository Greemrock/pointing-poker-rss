import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';
import { Place, SizeCard } from '../../Shared/enums';

type Props = {
  playersCards: {
    id: number;
    name: string;
    surname: string;
    job: string;
  }[];
  view?: Place;
  playerId: number;
};

export const PlayerContainer: React.FC<Props> = ({
  view,
  playersCards,
  playerId,
}) => {
  const classes = usePlayerContainerStyles();
  return (
    <>
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
            />
          );
        })}
      </Container>
    </>
  );
};
