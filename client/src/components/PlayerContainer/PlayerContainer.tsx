import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';

type Props = {
  playersCards: {
    id: number;
    name: string;
    surname: string;
    job: string;
  }[];
  view?: 'game' | undefined;
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
      {view !== 'game' ? (
        <Typography variant="h6" align="center" className={classes.title}>
          Members:
        </Typography>
      ) : null}

      <Container className={classes.container} maxWidth="md">
        {playersCards.map(({ id, job, name, surname }) => {
          return view === 'game' ? (
            <PlayerCard
              key={id}
              id={id}
              job={job}
              name={name}
              surname={surname}
              playerId={playerId}
              size="small"
            />
          ) : (
            <PlayerCard
              key={id}
              id={id}
              job={job}
              name={name}
              surname={surname}
              playerId={playerId}
            />
          );
        })}
      </Container>
    </>
  );
};
