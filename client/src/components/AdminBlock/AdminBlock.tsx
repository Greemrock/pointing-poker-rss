import React, { useContext } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { useStyles } from './AdminBlock.styles';
import { PlayerCard } from '../PlayerCard/PlayerCard';
import { UsersContext } from '../../context';
import { AuthActionCreator, Player } from '../../reducers/users';
import { handleLeaveRoom } from '../../api/game';

export const AdminBlock: React.FC = () => {
  const classes = useStyles();
  const {
    appState: { currentPlayer, players },
    dispatch,
  } = useContext(UsersContext);

  const handleStopGame = () => {
    handleLeaveRoom(currentPlayer.roomId);
    dispatch(AuthActionCreator(false));
  };

  const admin = players.find((el: Player) => el.isAdmin)!;

  return (
    <Container className={classes.mainBlock}>
      <Box className={classes.boxBlock}>
        <div>
          <Typography>Game admin</Typography>
          <PlayerCard
            {...admin}
            playerId={currentPlayer.id}
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
          {currentPlayer.isAdmin ? 'Stop Game' : 'Exit'}
        </Button>
      </Box>
    </Container>
  );
};
