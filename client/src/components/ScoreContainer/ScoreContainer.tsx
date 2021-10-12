import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useScoreContainerStyles } from './ScoreContainer.styled';
import { ScoreCard } from '../ScoreCard';
import { ScoreContext } from '../../context';

export const ScoreContainer: React.FC = () => {
  const classes = useScoreContainerStyles();

  const { scoreState } = useContext(ScoreContext);

  const results = scoreState.results;

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center" className={classes.title}>
        Score:
      </Typography>
      <Container className={classes.container}>
        {results.map(({ id, voteResult }) => (
          <ScoreCard
            key={id}
            score={voteResult}
            isWaiting={scoreState.isWaitingResults}
          />
        ))}
      </Container>
    </div>
  );
};
