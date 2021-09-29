import React, { useContext, useState } from 'react';
import { Button, Container, Paper } from '@material-ui/core';
import { useStartExitGameStyles } from './GameControlsBlock.styled';
import { IssueContext } from '../../context';
import {
  NextIssueActionCreator,
  PrevIssueActionCreator,
} from '../../reducers/issue';
import { GameTimer } from '../GameTimer';

export const GameControlsBlock: React.FC = () => {
  const classes = useStartExitGameStyles();
  const [isRoundEnded, setIsRoundEnded] = useState(false);

  const {
    issueState: { currentIssue, issues },
    issueDispatch,
  } = useContext(IssueContext);
  const handleNextIssue = () => {
    issueDispatch(NextIssueActionCreator());
  };
  const handlePrevIssue = () => {
    issueDispatch(PrevIssueActionCreator());
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <Paper>
        <GameTimer time={10} setIsRoundEnded={setIsRoundEnded} />
      </Paper>
      {isRoundEnded ? (
        <div className={classes.container}>
          {currentIssue === 0 ? null : (
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={handlePrevIssue}
            >
              Prev Issue
            </Button>
          )}
          {currentIssue === issues.length - 1 ? null : (
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={handleNextIssue}
            >
              Next Issue
            </Button>
          )}
        </div>
      ) : null}
      <Button className={classes.btn} variant="outlined" color="primary">
        Stop Game
      </Button>
    </Container>
  );
};
