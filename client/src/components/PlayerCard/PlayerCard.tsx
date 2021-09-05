import React from 'react';
import { Avatar, IconButton, Paper, Typography } from '@material-ui/core';
import { usePlayerCardStyles } from './PlayerCard.styled';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

type Props = {
  id: number;
  name: string;
  surname: string;
  position: string;
  image?: string;
  size?: 'small' | undefined;
};

export const PlayerCard: React.FC<Props> = ({
  id,
  name,
  surname,
  position,
  image,
  size,
}) => {
  const classes = usePlayerCardStyles({ size });
  return (
    <Paper elevation={3} className={classes.field}>
      <div className={classes.container}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src={image}>
          {name.slice(0, 1)}
          {surname.slice(0, 1)}
        </Avatar>
        <div className={classes.userInformation}>
          <Typography className={classes.userPointer}>
            {id ? "IT'S YOU" : ''}
          </Typography>
          <Typography className={classes.userName} variant="h5">
            {name} {surname}
          </Typography>
          {size === 'small' ? null : (
            <Typography className={classes.userJob}>{position}</Typography>
          )}
        </div>
      </div>
      <IconButton aria-label="kick palyer" className={classes.svg}>
        <HighlightOffIcon />
      </IconButton>
    </Paper>
  );
};
