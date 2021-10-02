import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { dataForGraph } from './dataForGraph';
import { useVoteGraphStyled } from './VoteGraph.styled';
import { cardsArrays, Place } from '../../Shared';
import { SettingsContext } from '../../context';
import { getOverallVoite } from '../../Util/getOveralVote';

type Props = {
  view?: Place.lobby;
};

export const VoteGraph: React.FC<Props> = ({ view }) => {
  const classes = useVoteGraphStyled();

  const {
    settingsState: { currentSets },
  } = useContext(SettingsContext);

  const typeCard = cardsArrays.tshirts;
  const voteAmount = [1, 0, 0, 2, 0, 2];

  return (
    <div className={classes.root}>
      {view && (
        <Typography variant="h6" align="center">
          Statistic:
        </Typography>
      )}
      <div className={classes.graph}>
        <Doughnut data={dataForGraph(typeCard, voteAmount)} />
      </div>
      <Typography variant="h4" align="center" className={classes.overallResult}>
        {cardsArrays.tshirts[getOverallVoite(voteAmount)]}
      </Typography>
    </div>
  );
};
