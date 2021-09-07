import React from 'react';
import { Avatar, IconButton, Paper, Typography } from '@material-ui/core';
import { usePlayerCardStyles } from './PlayerCard.styled';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { getInitialLetters } from '../../Util/getInitialLetters';

type Props = {
  id: number;
  playerId: number;
  name: string;
  surname: string;
  job: string;
  image?: string;
  size?: 'small' | undefined;
};

export const PlayerCard: React.FC<Props> = ({
  id,
  playerId,
  name,
  surname,
  job,
  image,
  size,
}) => {
  const classes = usePlayerCardStyles({ size });
  return (
    <Paper elevation={3} className={classes.field}>
      <div className={classes.container}>
        <Avatar
          className={classes.avatar}
          alt={`${name} ${surname}`}
          src={image}
        >
          {getInitialLetters(name, surname)}
        </Avatar>
        <div className={classes.userInformation}>
          <Typography className={classes.userPointer}>
            {id === playerId ? "IT'S YOU" : ''}
          </Typography>
          <Typography className={classes.userName} variant="h5">
            {name} {surname}
          </Typography>
          {size !== 'small' ? (
            <Typography className={classes.userJob}>{job}</Typography>
          ) : null}
        </div>
      </div>
      {id !== playerId ? (
        <IconButton aria-label="kick player" className={classes.svg}>
          <HighlightOffIcon />
        </IconButton>
      ) : null}
    </Paper>
  );
};
