import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { useStartExitGameStyles } from './GameControlsBlock.styled';
import { UsersContext } from '../../context/users.context';
import { handleEndRoundSubmit, handleStartTimerSubmit } from '../../api/game';
import { IssueContext } from '../../context/issue.context';

type Props = {
  setIsRoundEnded: React.Dispatch<React.SetStateAction<boolean>>;
  roundButtonDisabled: boolean;
  setRoundButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RoundControlsButton: React.FC<Props> = ({
  setIsRoundEnded,
  roundButtonDisabled,
  setRoundButtonDisabled,
}) => {
  const classes = useStartExitGameStyles();
  const {
    appState: {
      currentPlayer: { roomId },
    },
  } = useContext(UsersContext);
  const {
    issueState: { currentId },
  } = useContext(IssueContext);

  const handleStartRound = () => {
    setIsRoundEnded(false);
    setRoundButtonDisabled(!roundButtonDisabled);
    handleStartTimerSubmit({ roomId, currentId });
  };

  const handleStopRound = () => {
    setIsRoundEnded(true);
    setRoundButtonDisabled(!roundButtonDisabled);
    handleEndRoundSubmit({ roomId, currentId });
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.btnRound}
        variant="contained"
        color="primary"
        onClick={handleStartRound}
        disabled={roundButtonDisabled}
      >
        Start Round
      </Button>
      <Button
        className={classes.btnRound}
        variant="contained"
        color="primary"
        onClick={handleStopRound}
        disabled={!roundButtonDisabled}
      >
        End Round
      </Button>
    </div>
  );
};
