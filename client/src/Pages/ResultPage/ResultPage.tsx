import React, { useContext, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { ScorePlayers } from '../../components/ScorePlayers';
import { useResultPageStyles } from './ResultPage.styles';
import { IssueCard } from '../../components/Issue/IssueCard';
import { IssueContext } from '../../context';
import { VoteGraph } from '../../components/VoteGraph';
import { UsersContext } from '../../context/users.context';
import { handleGetIssueSubmit } from '../../api/issue';

export const ResultPage: React.FC = () => {
  const classes = useResultPageStyles();
  const { issueState } = useContext(IssueContext);
  const {
    appState: {
      currentPlayer: { roomId },
    },
  } = useContext(UsersContext);

  useEffect(() => {
    handleGetIssueSubmit(roomId);
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.nameGame}>
            <Typography variant="h6" align="center">
              Meeting room
            </Typography>
          </div>
          <Container className={classes.container} maxWidth="md">
            {issueState.issues.map(
              ({ id, link, isDone, priority, title, roomId, createdAt }) => {
                return (
                  <div key={id} className={classes.statistic}>
                    <IssueCard
                      id={id}
                      link={link}
                      isDone={isDone}
                      priority={priority}
                      title={title}
                      roomId={roomId}
                      createdAt={createdAt}
                    />
                    <VoteGraph issueId={id} isGame={false} />
                  </div>
                );
              }
            )}
          </Container>
        </div>
      </Container>
      <ScorePlayers />
    </>
  );
};
