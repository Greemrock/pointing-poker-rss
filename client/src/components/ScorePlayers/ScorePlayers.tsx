import { Paper } from '@material-ui/core';
import React from 'react';
import { useScorePlayersStyled } from '.';
import { Place, SizeCard } from '../../Shared';
import { PlayerContainer } from '../PlayerContainer';
import { ScoreContainer } from '../ScoreContainer';

const player = [
  {
    id: 'player0',
    name: 'aaa',
    surname: 'aaa',
    job: 'aaa',
    image: '',
    isAdmin: true,
    observer: false,
    roomId: 'room0',
  },
  {
    id: 'player1',
    name: 'bbb',
    surname: 'bbb',
    job: 'bbb',
    image: '',
    isAdmin: false,
    observer: false,
    roomId: 'room0',
  },
  {
    id: 'player2',
    name: 'ccc',
    surname: 'ccc',
    job: 'ccc',
    image: '',
    isAdmin: false,
    observer: false,
    roomId: 'room0',
  },
  {
    id: 'player3',
    name: 'ddd',
    surname: 'ddd',
    job: 'ddd',
    image: '',
    isAdmin: false,
    observer: false,
    roomId: 'room0',
  },
  {
    id: 'player4',
    name: 'qqqq',
    surname: 'qqqq',
    job: 'qqqq',
    image: '',
    isAdmin: false,
    observer: false,
    roomId: 'room0',
  },
  {
    id: 'player5',
    name: 'wwww',
    surname: 'www',
    job: 'www',
    image: '',
    isAdmin: false,
    observer: false,
    roomId: 'room0',
  },
];

export const ScorePlayers: React.FC = () => {
  const classes = useScorePlayersStyled();
  return (
    <Paper elevation={1} className={classes.root}>
      <ScoreContainer />
      <PlayerContainer playersCards={player} view={Place.game} />
    </Paper>
  );
};
