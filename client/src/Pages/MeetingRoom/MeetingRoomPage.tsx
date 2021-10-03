import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Container, Typography } from '@material-ui/core';
import { useMeetingRoomPageStyles } from './MeetingRoomPage.styled';
import { ScorePlayers } from '../../components/ScorePlayers';
import { IssueContext, SettingsContext, UsersContext } from '../../context/';
import { ChatBlock } from '../../components/Chat';
import { CardContainer } from '../../components/CardContainer';
import { VoteGraph } from '../../components/VoteGraph';
import { AdminBlock } from '../../components/AdminBlock';
import { IssueContainer } from '../../components/Issue/IssueContainer';
import { Issue } from '../../Shared';
import { socket } from '../../api/playersRequests';
import { UpdateIssueActionCreator } from '../../reducers/issue';
import { handleGetIssueSubmit } from '../../api/issue';
import { SetCurrentIssueIdActionCreator } from '../../reducers/issue/issue.create-action';
import { GameControlsBlock } from '../../components/GameControlsBlock';

export const MeetingRoomPage: React.FC = () => {
  const classes = useMeetingRoomPageStyles();

  const {
    appState: { isAuth, currentPlayer },
  } = useContext(UsersContext);

  const {
    settingsState: { currentSets },
  } = useContext(SettingsContext);
  const { issueDispatch } = useContext(IssueContext);

  const [isRoundEnded, setIsRoundEnded] = useState(true);

  useEffect(() => {
    handleGetIssueSubmit(currentPlayer.roomId);
    socket.off('allIssues');
    socket.on('allIssues', (data, currentIssueId) => {
      issueDispatch(UpdateIssueActionCreator(data));
      issueDispatch(SetCurrentIssueIdActionCreator(currentIssueId));
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
      console.log(score);
    });
  });

  return (
    <>
      {!isAuth && <Redirect to="/" />}
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
          <IssueContainer view={Issue.game} />
          {!currentPlayer.observer && !isRoundEnded && (
            <Container className={classes.cardsContainer}>
              <CardContainer cardSelected={false} deck={currentSets.deck} />
            </Container>
          )}
        </div>
        <ScorePlayers />
      </Container>
      <ChatBlock />
    </>
  );
};
