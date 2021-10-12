import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Container, Typography, Button } from '@material-ui/core';
import { useMeetingRoomPageStyles } from './MeetingRoomPage.styled';
import { ScorePlayers } from '../../components/ScorePlayers';
import {
  IssueContext,
  ScoreContext,
  SettingsContext,
  UsersContext,
} from '../../context/';
import { CardContainer } from '../../components/CardContainer';
import { AdminBlock } from '../../components/AdminBlock';
import { IssueContainer } from '../../components/Issue/IssueContainer';
import { Issue } from '../../Shared';
import { socket } from '../../api/playersRequests';
import { handleGetIssuesGameSubmit } from '../../api/issue';
import {
  UpdateIssueActionCreator,
  SetCurrentIssueIdActionCreator,
  SetIssueDoneActionCreator,
} from '../../reducers/issue';
import { GameControlsBlock } from '../../components/GameControlsBlock';
import {
  SetDefaultScoreActionCreator,
  SetVoteArrayActionCreator,
  UpdateScoreActionCreator,
} from '../../reducers/score';
import { handleEndGameSubmit } from '../../api/game';
import { AuthActionCreator, EndGameActionCreator } from '../../reducers/users';
import { VoteGraph } from '../../components/VoteGraph';
import { ReloadSetsActionCreator } from '../../reducers/settings';

export const MeetingRoomPage: React.FC = () => {
  const classes = useMeetingRoomPageStyles();

  const {
    appState: { currentPlayer, isGameEnded, players },
    dispatch,
  } = useContext(UsersContext);

  const {
    settingsState: { currentSets },
    settingsDispatch,
  } = useContext(SettingsContext);

  const {
    issueState: { issues },
    issueDispatch,
  } = useContext(IssueContext);

  const {
    scoreState: { results },
    scoreDispatch,
  } = useContext(ScoreContext);

  const [isRoundEnded, setIsRoundEnded] = useState(true);

  const isResultExist = results.length !== 0 && results[0].issueId !== '';

  const endGame = () => {
    handleEndGameSubmit(currentPlayer.roomId);
  };

  useEffect(() => {
    socket.off('adminLeft');
    socket.on('adminLeft', () => {
      dispatch(AuthActionCreator(false));
    });
  });

  useEffect(() => {
    socket.off('returnSettings');
    socket.on('returnSettings', (settings) => {
      settingsDispatch(ReloadSetsActionCreator(settings));
    });
  }, []);

  useEffect(() => {
    handleGetIssuesGameSubmit(currentPlayer.roomId);
    socket.off('allIssuesGame');
    socket.on('allIssuesGame', (data, currentIssueId) => {
      issueDispatch(UpdateIssueActionCreator(data));
      if (!currentIssueId) {
        issueDispatch(SetCurrentIssueIdActionCreator(data[0].id));
      } else {
        issueDispatch(SetCurrentIssueIdActionCreator(currentIssueId));
      }
      if (results.length === 0)
        scoreDispatch(SetDefaultScoreActionCreator(players));
    });
  }, []);

  useEffect(() => {
    socket.off('changeCurrentId');
    socket.on('changeCurrentId', (id) => {
      issueDispatch(SetCurrentIssueIdActionCreator(id));
    });
  }, []);

  useEffect(() => {
    socket.off('overallInfo');
    socket.on('overallInfo', (score) => {
      scoreDispatch(SetVoteArrayActionCreator(score));
    });
  }, []);

  useEffect(() => {
    socket.off('userResults');
    socket.on('userResults', (results, currentIssue) => {
      scoreDispatch(UpdateScoreActionCreator(results));
      issueDispatch(SetIssueDoneActionCreator(currentIssue));
      {
        !currentSets.isTimerNeeded && setIsRoundEnded(true);
      }
    });
  }, []);

  useEffect(() => {
    socket.off('isGameEnded');
    socket.on('isGameEnded', () => {
      dispatch(EndGameActionCreator());
    });
  }, []);

  return (
    <>
      {isGameEnded && <Redirect to="/result" />}
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.nameGame}>
            <Typography variant="h6" align="center">
              Meeting room
            </Typography>
          </div>
          <AdminBlock />
          <GameControlsBlock
            isRoundEnded={isRoundEnded}
            setIsRoundEnded={setIsRoundEnded}
          />
          <Container className={classes.middleBlock}>
            <IssueContainer view={Issue.game} />
            {isRoundEnded && isResultExist && <VoteGraph isGame={true} />}
          </Container>
          {!currentPlayer.observer && !isRoundEnded && (
            <Container className={classes.cardsContainer}>
              <CardContainer deck={currentSets.deck} />
            </Container>
          )}
          {currentPlayer.isAdmin && (
            <div className={classes.endGameBlock}>
              {issues.every((el) => el.isDone === true) && (
                <Button variant="contained" color="primary" onClick={endGame}>
                  End Game
                </Button>
              )}
            </div>
          )}
        </div>
        <ScorePlayers />
      </Container>
    </>
  );
};
