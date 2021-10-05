import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import { useStartExitGameStyles } from './GameControlsBlock.styled';
import {
  IssueContext,
  ScoreContext,
  SettingsContext,
  UsersContext,
} from '../../context';
import {
  NextIssueActionCreator,
  PrevIssueActionCreator,
} from '../../reducers/issue';
import { GameTimer } from '../GameTimer';
import { TimerStatus } from '../../Shared';
import { convertToSeconds } from '../../Util/convertToSeconds';
import { RoundControlsButton } from './RoundControlsBlock';
import { handleSendCurrentIssueIdSubmit } from '../../api/issue';
import { handleResetTimerSubmit } from '../../api/game';
import { socket } from '../../api/playersRequests';
import {
  ResetScoresActionCreator,
  SetScoresWaitingActionCreator,
} from '../../reducers/score';

type Props = {
  isRoundEnded: boolean;
  setIsRoundEnded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GameControlsBlock: React.FC<Props> = ({
  isRoundEnded,
  setIsRoundEnded,
}) => {
  const classes = useStartExitGameStyles();
  const {
    settingsState: {
      currentSets: { isTimerNeeded, minutes, seconds },
    },
  } = useContext(SettingsContext);
  const {
    issueState: { currentIdNumber, issues },
    issueDispatch,
  } = useContext(IssueContext);
  const {
    appState: {
      currentPlayer: { isAdmin, roomId },
    },
  } = useContext(UsersContext);

  const { scoreDispatch } = useContext(ScoreContext);

  const [statusStarted, setStatusStarted] = useState(TimerStatus.STOPPED);
  const [secondsRemaining, setSecondsRemaining] = useState(
    convertToSeconds(minutes, seconds)
  );
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [roundButtonDisabled, setRoundButtonDisabled] = useState(false);

  const handleIssueCurrentId = (nextIssue: boolean) => {
    let changingId = '';
    if (nextIssue) {
      changingId = issues[currentIdNumber + 1].id;
    } else {
      changingId = issues[currentIdNumber - 1].id;
    }
    handleSendCurrentIssueIdSubmit({ roomId, currentIssueId: changingId });
  };

  const handleResetRound = () => {
    handleResetTimerSubmit(roomId);
  };
  const handleNextIssue = () => {
    issueDispatch(NextIssueActionCreator());
    handleResetRound();
    handleIssueCurrentId(true);
  };
  const handlePrevIssue = () => {
    issueDispatch(PrevIssueActionCreator());
    handleResetRound();
    handleIssueCurrentId(false);
  };
  useEffect(() => {
    socket.off('isTimerStarted');
    socket.on('isTimerStarted', () => {
      setStatusStarted(TimerStatus.STARTED);
      setIsRoundEnded(false);
      setButtonDisabled(true);
      scoreDispatch(SetScoresWaitingActionCreator());
    });
  });

  useEffect(() => {
    socket.off('isTimerReset');
    socket.on('isTimerReset', () => {
      setStatusStarted(TimerStatus.STOPPED);
      setSecondsRemaining(convertToSeconds(minutes, seconds));
      setButtonDisabled(false);
      scoreDispatch(ResetScoresActionCreator());
    });
  });

  return (
    <Container className={classes.root} maxWidth="md">
      {isTimerNeeded ? (
        <GameTimer
          setIsRoundEnded={setIsRoundEnded}
          statusStarted={statusStarted}
          setStatusStarted={setStatusStarted}
          secondsRemaining={secondsRemaining}
          setSecondsRemaining={setSecondsRemaining}
          buttonDisabled={buttonDisabled}
          setButtonDisabled={setButtonDisabled}
        />
      ) : (
        isAdmin && (
          <RoundControlsButton
            setIsRoundEnded={setIsRoundEnded}
            roundButtonDisabled={roundButtonDisabled}
            setRoundButtonDisabled={setRoundButtonDisabled}
          />
        )
      )}
      {isAdmin && (
        <div className={classes.container}>
          {currentIdNumber === 0 ? null : (
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
          {currentIdNumber === issues.length - 1 ? null : (
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
      )}
    </Container>
  );
};
