import React from 'react';
import { Button } from '@material-ui/core';
import { useStartExitGameStyles } from './GameControlsBlock.styled';

type Props = {
  setIsRoundEnded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RoundControlsButton: React.FC<Props> = ({ setIsRoundEnded }) => {
  const classes = useStartExitGameStyles();

  const handleStartRound = () => {
    setIsRoundEnded(false);
  };
  const handleStopRound = () => {
    setIsRoundEnded(true);
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.btnRound}
        variant="contained"
        color="primary"
        onClick={handleStartRound}
      >
        Start Round
      </Button>
      <Button
        className={classes.btnRound}
        variant="contained"
        color="primary"
        onClick={handleStopRound}
      >
        End Round
      </Button>
    </div>
  );
};
