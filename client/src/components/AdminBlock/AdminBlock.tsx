import React, { useContext } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './AdminBlock.styles';
import { PlayerCard } from '../PlayerCard/PlayerCard';
import { UsersContext } from '../../context';
import { Player } from '../../reducers/users';

export const AdminBlock: React.FC = () => {
  const classes = useStyles();
  const { appState } = useContext(UsersContext);

  const handleStopGame = () => {
    console.log('Stop game');
  };

  const admin = appState.players.find((el: Player) => el.isAdmin)!;

  return (
    <Box className={classes.mainBlock}>
      <Box className={classes.boxBlock}>
        <div>
          <Typography>Game admin</Typography>
          <PlayerCard
            {...admin}
            playerId={appState.currentPlayer.id}
            isDisabled={false}
            removeUser={null}
          />
        </div>
        <Button
          className={classes.stopGameButton}
          onClick={handleStopGame}
          variant="outlined"
          color="primary"
        >
          {appState.currentPlayer.isAdmin ? 'Stop Game' : 'Exit'}
        </Button>
      </Box>
    </Box>
  );
};
