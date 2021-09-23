import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { useScoreContainerStyles } from './ScoreContainer.styled';
import { Place } from '@material-ui/icons';
import { SizeCard } from '../../Shared';
import { PlayerCard } from '../PlayerCard';
import { ScoreCard } from '../ScoreCard';

const results = [
  { id: '0', issueId: 'issue0', playerId: 'player0', score: 'xl' },
  { id: '1', issueId: 'issue0', playerId: 'player1', score: 'xxl' },
  { id: '2', issueId: 'issue0', playerId: 'player2', score: 'undefaint' },
  { id: '3', issueId: 'issue0', playerId: 'player3', score: 'l' },
  { id: '4', issueId: 'issue0', playerId: 'player4', score: 'm' },
  { id: '5', issueId: 'issue0', playerId: 'player5', score: 'sm' },
];

export const ScoreContainer: React.FC = () => {
  const classes = useScoreContainerStyles();

  const currentId = 'issue0';

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center" className={classes.title}>
        Score:
      </Typography>
      <Container className={classes.container} maxWidth="md">
        {results.map((res) => (
          <ScoreCard key={res.id} />
        ))}
      </Container>
    </div>
  );
};
