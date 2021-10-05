import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { dataForGraph } from './dataForGraph';
import { useVoteGraphStyled } from './VoteGraph.styled';
import { cardsArrays, Place } from '../../Shared';
import { ScoreContext, SettingsContext } from '../../context';
import { getOverallVoite } from '../../Util/getOveralVote';
import { removeZeros } from '../../Util/removeZeros';

type Props = {
  view?: Place.lobby;
};

export const VoteGraph: React.FC<Props> = ({ view }) => {
  const classes = useVoteGraphStyled();
  const {
    scoreState: { voteArray },
  } = useContext(ScoreContext);

  const {
    settingsState: { currentSets },
  } = useContext(SettingsContext);

  return (
    <div className={classes.root}>
      {view && (
        <Typography variant="h6" align="center">
          Statistic:
        </Typography>
      )}
      <div className={classes.graph}>
        <Doughnut
          data={dataForGraph(
            removeZeros(cardsArrays[currentSets.deck], voteArray),
            voteArray
          )}
        />
      </div>
      <Typography variant="h4" align="center" className={classes.overallResult}>
        {cardsArrays.tshirts[getOverallVoite(voteArray)]}
      </Typography>
    </div>
  );
};
