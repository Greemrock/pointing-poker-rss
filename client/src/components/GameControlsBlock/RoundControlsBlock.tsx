import React from 'react';
import { Button } from '@material-ui/core';
import { useStartExitGameStyles } from './GameControlsBlock.styled';

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

  const handleStartRound = () => {
    setIsRoundEnded(false);
    setRoundButtonDisabled(!roundButtonDisabled);
  };
  const handleStopRound = () => {
    setIsRoundEnded(true);
    setRoundButtonDisabled(!roundButtonDisabled);
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
