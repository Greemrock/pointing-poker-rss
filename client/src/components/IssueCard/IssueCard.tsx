import React from 'react';
import { Paper, Typography, IconButton, Tooltip } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AddIcon from '@material-ui/icons/Add';
import { useIssueCardStyles } from './IssueCard.styled';
import { Issue } from '../../Shared/enums';

type Props = {
  id: number;
  title?: string | undefined;
  priority?: 'low' | 'middle' | 'hight';
  view?: Issue;
  isDone: boolean;
  currentId: number;
};

export const IssueCard: React.FC<Props> = ({
  id,
  title,
  priority,
  view,
  isDone,
  currentId,
}) => {
  const classes = useIssueCardStyles({ isDone, id, currentId, view });
  return (
    <Paper elevation={3} className={classes.field}>
      {view === Issue.create ? (
        <>
          <Typography className={classes.title}>Create new Issue</Typography>
          <div className={classes.adminWView}>
            <Tooltip title="Add issue" placement="bottom-start">
              <IconButton className={classes.add} aria-label="add issue">
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        </>
      ) : (
        <div className={classes.wrapperText}>
          <Typography className={classes.current}>
            {id === currentId ? 'current' : ''}
          </Typography>
          <Tooltip title={`${title}`} placement="bottom-start">
            <Typography className={classes.title}>{title}</Typography>
          </Tooltip>
          <Typography className={classes.priority}>{priority}</Typography>
        </div>
      )}
      {view === Issue.update ? (
        <div className={classes.adminWView}>
          <Tooltip title="Edit issue" placement="bottom-start">
            <IconButton className={classes.edit} aria-label="edit issue">
              <CreateOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete issue" placement="bottom-start">
            <IconButton className={classes.delete} aria-label="delete issue">
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      ) : null}
      {view === Issue.delete ? (
        <div className={classes.adminWView}>
          <Tooltip title="Delete issue" placement="bottom-start">
            <IconButton className={classes.delete} aria-label="delete issue">
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      ) : null}
    </Paper>
  );
};
