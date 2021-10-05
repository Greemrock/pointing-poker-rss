import React, { useContext } from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { ScorePlayers } from '../../components/ScorePlayers';
import { useResultPageStyles } from './ResultPage.styles';
import { IssueCard } from '../../components/Issue/IssueCard';
import { IssueContext, UsersContext } from '../../context';
import { VoteGraph } from '../../components/VoteGraph';
import { Redirect } from 'react-router-dom';

export const ResultPage: React.FC = () => {
  const classes = useResultPageStyles();

  const { issueState } = useContext(IssueContext);
  const {
    appState: { isAuth },
  } = useContext(UsersContext);

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
                    <VoteGraph />
                  </div>
                );
              }
            )}
          </Container>
          <Button variant="contained" className={classes.download}>
            Download results
          </Button>
        </div>
      </Container>
      <ScorePlayers />
    </>
  );
};
