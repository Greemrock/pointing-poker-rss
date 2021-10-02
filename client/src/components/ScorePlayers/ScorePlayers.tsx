import React, { useContext, useState } from 'react';
import { Box, Button, Drawer, Fab, Paper, Tooltip } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CloseIcon from '@material-ui/icons/Close';
import { UsersContext } from '../../context';
import { Place } from '../../Shared';
import { PlayerContainer } from '../PlayerContainer';
import { ScoreContainer } from '../ScoreContainer';
import { useScorePlayersStyled } from './ScorePlayers.styled';

export const ScorePlayers: React.FC = () => {
  const classes = useScorePlayersStyled();
  const [open, setOpen] = useState(false);

  const {
    appState: { currentPlayer, isAuth },
  } = useContext(UsersContext);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <>
      {/* {isAuth && ( */}
      <Tooltip title="Score" placement="left">
        <Fab
          onClick={toggleDrawer(true)}
          color="primary"
          aria-label="add"
          className={classes.btnScore}
        >
          <EventAvailableIcon />
        </Fab>
      </Tooltip>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box role="presentation" className={classes.box}>
          <div className={classes.scoreBody}>
            <Button
              color="secondary"
              variant="outlined"
              fullWidth
              onClick={() => setOpen(false)}
              endIcon={<CloseIcon />}
            />

            <div className={classes.wrapper}>
              <ScoreContainer />
              <PlayerContainer />
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};
