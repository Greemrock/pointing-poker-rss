import { Typography } from '@material-ui/core';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { dataForGraph } from './dataForGraph';
import { useVoteGraphStyled } from './VoteGraph.styled';

export const VoteGraph: React.FC = () => {
  const classes = useVoteGraphStyled();

  const typeCard = ['1', '2', '3', '4', '5'];
  const voteAmount = [0, 2, 1, 0, 1];

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center">
        Statistic:
      </Typography>
      <div className={classes.graph}>
        <Pie data={() => dataForGraph(typeCard, voteAmount)} />
      </div>
    </div>
  );
};
