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
import { ChatBlock } from '../../components/Chat';
import { CardContainer } from '../../components/CardContainer';
import { AdminBlock } from '../../components/AdminBlock';
import { IssueContainer } from '../../components/Issue/IssueContainer';
import { Issue } from '../../Shared';
import { socket } from '../../api/playersRequests';
import { UpdateIssueActionCreator } from '../../reducers/issue';
import { handleGetIssueSubmit } from '../../api/issue';
import {
  SetCurrentIssueIdActionCreator,
  SetIssueDoneActionCreator,
} from '../../reducers/issue/issue.create-action';
import { GameControlsBlock } from '../../components/GameControlsBlock';
import {
  SetDefaultScoreActionCreator,
  SetVoteArrayActionCreator,
  UpdateScoreActionCreator,
} from '../../reducers/score';
import { handleEndGameSubmit } from '../../api/game';
import { EndGameActionCreator } from '../../reducers/users';
import { VoteGraph } from '../../components/VoteGraph';

export const MeetingRoomPage: React.FC = () => {
  const classes = useMeetingRoomPageStyles();

  const {
    appState: { isAuth, currentPlayer, isGameEnded, players },
    dispatch,
  } = useContext(UsersContext);

  const {
    settingsState: { currentSets },
  } = useContext(SettingsContext);
  const {
    issueState: { issues },
    issueDispatch,
  } = useContext(IssueContext);

  const { scoreState, scoreDispatch } = useContext(ScoreContext);

  const [isRoundEnded, setIsRoundEnded] = useState(true);

  const isResultExist =
    scoreState.results.length !== 0 && scoreState.results[0].issueId !== '';

  const endGame = () => {
    handleEndGameSubmit(currentPlayer.roomId);
  };

  useEffect(() => {
    handleGetIssueSubmit(currentPlayer.roomId);
    socket.off('allIssues');
    socket.on('allIssues', (data, currentIssueId) => {
      issueDispatch(UpdateIssueActionCreator(data));
      issueDispatch(SetCurrentIssueIdActionCreator(currentIssueId));
      if (scoreState.results.length === 0)
        scoreDispatch(SetDefaultScoreActionCreator(players));
    });
  }, []);

  useEffect(() => {
    socket.off('changeCurrentId');
    socket.on('changeCurrentId', (id) => {
      issueDispatch(SetCurrentIssueIdActionCreator(id));
    });
  });

  useEffect(() => {
    socket.off('overallInfo');
    socket.on('overallInfo', (score) => {
      scoreDispatch(SetVoteArrayActionCreator(score));
    });
  });

  useEffect(() => {
    socket.off('userResults');
    socket.on('userResults', (results, currentIssue) => {
      scoreDispatch(UpdateScoreActionCreator(results));
      issueDispatch(SetIssueDoneActionCreator(currentIssue));
      {
        !currentSets.isTimerNeeded && setIsRoundEnded(true);
      }
    });
  });
  useEffect(() => {
    socket.off('isGameEnded');
    socket.on('isGameEnded', () => {
      dispatch(EndGameActionCreator());
    });
  });

  return (
    <>
      {!isAuth && <Redirect to="/" />}
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
              <CardContainer cardSelected={false} deck={currentSets.deck} />
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
      <ChatBlock />
    </>
  );
};
