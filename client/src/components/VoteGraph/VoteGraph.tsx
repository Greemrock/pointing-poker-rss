import { Typography } from '@material-ui/core';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { dataForGraph } from './dataForGraph';
import { useVoteGraphStyled } from './VoteGraph.styled';
import { cardsArrays } from '../../Shared';

export const VoteGraph: React.FC = () => {
  const classes = useVoteGraphStyled();

  const typeCard = cardsArrays.tshirts;
  const voteAmount = [0, 2, 1, 0, 1, 7];

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center">
        Statistic:
      </Typography>
      <div className={classes.graph}>
        <Pie data={dataForGraph(typeCard, voteAmount)} />
      </div>
    </div>
  );
};
