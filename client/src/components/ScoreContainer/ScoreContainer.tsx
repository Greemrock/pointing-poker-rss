import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useScoreContainerStyles } from './ScoreContainer.styled';
import { ScoreCard } from '../ScoreCard';

const results = [
  { id: '0', issueId: 'issue0', playerId: 'player0', score: 'xl' },
  { id: '1', issueId: 'issue0', playerId: 'player1', score: 'xxl' },
  { id: '2', issueId: 'issue0', playerId: 'player2', score: 'undefaint' },
  { id: '3', issueId: 'issue0', playerId: 'player3', score: 'l' },
  { id: '4', issueId: 'issue0', playerId: 'player4', score: 'm' },
  { id: '5', issueId: 'issue0', playerId: 'player5', score: 'sm' },
  { id: '0', issueId: 'issue0', playerId: 'player6', score: 'xl' },
  { id: '1', issueId: 'issue0', playerId: 'player7', score: 'xxl' },
  { id: '2', issueId: 'issue0', playerId: 'player8', score: 'undefaint' },
  { id: '3', issueId: 'issue0', playerId: 'player9', score: 'l' },
  { id: '4', issueId: 'issue0', playerId: 'player10', score: 'm' },
  { id: '5', issueId: 'issue0', playerId: 'player11', score: 'sm' },
];

export const ScoreContainer: React.FC = () => {
  const classes = useScoreContainerStyles();

  const currentId = 'issue0';

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center" className={classes.title}>
        Score:
      </Typography>
      <Container className={classes.container}>
        {results.map(({ id, score }) => (
          <ScoreCard key={id} score={score} />
        ))}
      </Container>
    </div>
  );
};
