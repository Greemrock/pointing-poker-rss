import React from 'react';
import { Paper, Typography, IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AddIcon from '@material-ui/icons/Add';
import { getTrimString } from '../../Util/getTrimString';
import { useIssueCardStyles } from './IssueCard.styled';

type Props = {
  title?: string | undefined;
  priority?: string | undefined;
  view?: 'lobby' | 'game' | undefined;
};

export const IssueCard: React.FC<Props> = ({ title, priority, view }) => {
  const classes = useIssueCardStyles({ view });
  const TRIM_STRING = view === 'game' ? 13 : 11;
  return (
    <Paper elevation={3} className={classes.field}>
      {title === undefined && priority === undefined && view === undefined ? (
        <Typography className={classes.title}>Create new Issue</Typography>
      ) : (
        <div className={classes.wrapperText}>
          <Typography className={classes.current}>current</Typography>
          <Typography className={classes.title}>
            {getTrimString(title, TRIM_STRING)}
          </Typography>
          <Typography className={classes.priority}>{priority}</Typography>
        </div>
      )}
      {view === 'lobby' ? (
        <div className={classes.adminWView}>
          <IconButton className={classes.edit} aria-label="edit issue">
            <CreateOutlinedIcon />
          </IconButton>
          <IconButton className={classes.delete} aria-label="delete issue">
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      ) : null}
      {view === 'game' || view === undefined ? (
        <div className={classes.adminWView}>
          <IconButton className={classes.add} aria-label="add issue">
            <AddIcon />
          </IconButton>
        </div>
      ) : null}
    </Paper>
  );
};
