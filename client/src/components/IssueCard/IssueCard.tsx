import { Paper, Typography, IconButton } from '@material-ui/core';
import React from 'react';
import { useIssueCardStyles } from './IssueCard.styled';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

type Props = {
  title?: string | undefined;
  priority?: string | undefined;
  view?: 'game' | undefined;
};

export const IssueCard: React.FC<Props> = ({ title, priority, view }) => {
  const classes = useIssueCardStyles({ view });
  return (
    <Paper elevation={3} className={classes.field}>
      <div className={classes.wrapperText}>
        <Typography className={classes.current}>current</Typography>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.priority}>{priority}</Typography>
      </div>
      <div className={classes.wrapperBtns}>
        <IconButton className={classes.edit} aria-label="kick player">
          <CreateOutlinedIcon />
        </IconButton>
        <IconButton className={classes.delete} aria-label="kick player">
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </Paper>
  );
};
