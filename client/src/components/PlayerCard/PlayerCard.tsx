import React from 'react';
import {
  Avatar,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { getInitialLetters } from '../../Util/getInitialLetters';
import { usePlayerCardStyles } from './PlayerCard.styled';
import { SizeCard } from '../../Shared/enums';

type Props = {
  id: string;
  playerId: string | undefined;
  isAdmin: boolean;
  name: string;
  surname: string;
  job: string;
  image?: string | null;
  size?: SizeCard;
  removeUser: () => void;
};

export const PlayerCard: React.FC<Props> = ({
  id,
  playerId,
  name,
  surname,
  job,
  image,
  size,
  isAdmin,
  removeUser,
}) => {
  const classes = usePlayerCardStyles({ size });
  return (
    <Paper elevation={3} className={classes.field}>
      <div className={classes.container}>
        {image ? (
          <Avatar
            className={classes.avatar}
            alt={`${name} ${surname}`}
            src={image}
          ></Avatar>
        ) : (
          <Avatar className={classes.avatar} alt={`${name} ${surname}`}>
            {getInitialLetters(name, surname)}
          </Avatar>
        )}

        <div className={classes.userInformation}>
          <Typography className={classes.userPointer}>
            {id === playerId ? "IT'S YOU" : ''}
          </Typography>
          <Tooltip title={`${name} ${surname}`} placement="bottom-start">
            <Typography className={classes.userName} variant="h5">
              {`${name} ${surname}`}
            </Typography>
          </Tooltip>
          {!size ? (
            <Tooltip title={job} placement="bottom-start">
              <Typography className={classes.userJob}>{job}</Typography>
            </Tooltip>
          ) : null}
        </div>
      </div>
      {id !== playerId && !isAdmin ? (
        <Tooltip title="kick player" placement="bottom-start">
          <IconButton
            aria-label="kick player"
            className={classes.svg}
            onClick={removeUser}
          >
            <HighlightOffIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Paper>
  );
};
