import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Paper } from '@material-ui/core';
import { useStartExitGameStyles } from './GameControlsBlock.styled';
import { IssueContext, SettingsContext } from '../../context';
import {
  NextIssueActionCreator,
  PrevIssueActionCreator,
} from '../../reducers/issue';
import { GameTimer } from '../GameTimer';
import { TimerStatus } from '../../Shared';
import { convertToSeconds } from '../../Util/convertToSeconds';
import { RoundControlsButton } from './RoundControlsBlock';

export const GameControlsBlock: React.FC = () => {
  const classes = useStartExitGameStyles();
  const {
    settingsState: {
      currentSets: { isTimerNeeded, minutes, seconds },
    },
  } = useContext(SettingsContext);
  const {
    issueState: { currentIssue, issues },
    issueDispatch,
  } = useContext(IssueContext);

  const [isRoundEnded, setIsRoundEnded] = useState(true);
  const [statusStarted, setStatusStarted] = useState(TimerStatus.STOPPED);
  const [secondsRemaining, setSecondsRemaining] = useState(
    convertToSeconds(minutes, seconds)
  );
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [roundButtonDisabled, setRoundButtonDisabled] = useState(false);

  const handleResetRound = () => {
    setStatusStarted(TimerStatus.STOPPED);
    setSecondsRemaining(convertToSeconds(minutes, seconds));
    setButtonDisabled(false);
  };
  const handleNextIssue = () => {
    issueDispatch(NextIssueActionCreator());
    handleResetRound();
  };
  const handlePrevIssue = () => {
    issueDispatch(PrevIssueActionCreator());
    handleResetRound();
  };

  useEffect(() => {
    console.log('Waiting votes...');
  });

  return (
    <Container className={classes.root} maxWidth="md">
      {isTimerNeeded ? (
        <Paper>
          <GameTimer
            setIsRoundEnded={setIsRoundEnded}
            statusStarted={statusStarted}
            setStatusStarted={setStatusStarted}
            secondsRemaining={secondsRemaining}
            setSecondsRemaining={setSecondsRemaining}
            buttonDisabled={buttonDisabled}
            setButtonDisabled={setButtonDisabled}
          />
        </Paper>
      ) : (
        <RoundControlsButton
          setIsRoundEnded={setIsRoundEnded}
          roundButtonDisabled={roundButtonDisabled}
          setRoundButtonDisabled={setRoundButtonDisabled}
        />
      )}
      <div className={classes.container}>
        {currentIssue === 0 ? null : (
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={handlePrevIssue}
            disabled={!isRoundEnded}
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
            disabled={!isRoundEnded}
          >
            Next Issue
          </Button>
        )}
      </div>
      <Button className={classes.btn} variant="outlined" color="primary">
        Stop Game
      </Button>
    </Container>
  );
};
