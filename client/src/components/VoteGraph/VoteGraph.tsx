import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { dataForGraph } from './dataForGraph';
import { useVoteGraphStyled } from './VoteGraph.styled';
import { cardsArrays, Place } from '../../Shared';
import { ScoreContext, SettingsContext } from '../../context';
import { getOverallVoite } from '../../Util/getOveralVote';
import { removeZeros } from '../../Util/removeZeros';
import { IssueContext } from '../../context/issue.context';
import { IssueType } from '../../reducers/issue/issue.type';

type Props = {
  view?: Place.lobby;
  isGame: boolean;
  issueId?: string;
};

export const VoteGraph: React.FC<Props> = ({ view, isGame, issueId }) => {
  const classes = useVoteGraphStyled({ isGame });

  const {
    scoreState: { voteArray },
  } = useContext(ScoreContext);

  const {
    issueState: { issues },
  } = useContext(IssueContext);

  const {
    settingsState: {
      currentSets: { deck },
    },
  } = useContext(SettingsContext);

  const typeCard = cardsArrays[deck];

  const usersVoteArray = isGame
    ? voteArray
    : issues.find((el: IssueType) => el.id === issueId)?.overall;

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
            ...removeZeros(typeCard, usersVoteArray as number[])
          )}
        />
      </div>
      <Typography variant="h4" align="center" className={classes.overallResult}>
        {typeCard[getOverallVoite(usersVoteArray as number[])]}
      </Typography>
    </div>
  );
};
