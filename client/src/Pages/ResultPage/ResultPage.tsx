import React, { useContext, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { ScorePlayers } from '../../components/ScorePlayers';
import { useResultPageStyles } from './ResultPage.styles';
import { IssueCard } from '../../components/Issue/IssueCard';
import { IssueContext, SettingsContext, UsersContext } from '../../context';
import { VoteGraph } from '../../components/VoteGraph';
import { handleGetIssueSubmit } from '../../api/issue';
import { Redirect } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { getOverallVoite } from '../../Util/getOveralVote';
import { cardsArrays } from '../../Shared';

export const ResultPage: React.FC = () => {
  const classes = useResultPageStyles();

  const {
    issueState: { issues },
  } = useContext(IssueContext);

  const {
    settingsState: {
      currentSets: { deck },
    },
  } = useContext(SettingsContext);

  const {
    appState: {
      currentPlayer: { roomId },
      isAuth,
    },
  } = useContext(UsersContext);

  const createArrayResults = () => {
    return issues.map(({ title, link, overall }, index) => {
      return [
        index + 1,
        title,
        link,
        cardsArrays[deck][getOverallVoite(overall)],
      ];
    });
  };

  const csvData = [
    ['Issue', 'Title', 'Link', 'Result'],
    ...createArrayResults(),
  ];

  const handleExit = () => {
    window.location.reload();
  };

  useEffect(() => {
    handleGetIssueSubmit(roomId);
  }, []);

  return (
    <>
      {!isAuth && <Redirect to="/" />}
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.nameGame}>
            <Typography variant="h6" align="center">
              Results
            </Typography>
          </div>
          <Container className={classes.container} maxWidth="md">
            {issues.map(
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
          <Button
            variant="contained"
            color="primary"
            className={classes.download}
            onClick={handleExit}
          >
            Exit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.download}
          >
            <CSVLink data={csvData} filename={'results.csv'} target="_blank">
              Download results
            </CSVLink>
          </Button>
        </div>
      </Container>
      <ScorePlayers />
    </>
  );
};
