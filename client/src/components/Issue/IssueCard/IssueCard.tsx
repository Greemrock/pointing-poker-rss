import React, { useContext } from 'react';
import {
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Link,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AddIcon from '@material-ui/icons/Add';
import { useIssueCardStyles } from './IssueCard.styled';
import { Issue, Priority, SizeCard } from '../../../Shared/enums';
import {
  AddEditIssueActionCreator,
  EditIssueFalseActionCreator,
  EditIssueTrueActionCreator,
} from '../../../reducers/issue';
import { handleDeleteIssueSubmit } from '../../../api/issue';
import { IssueContext } from '../../../context';

type Props = {
  id: string;
  title?: string;
  link?: string;
  priority?: Priority;
  isDone: boolean;
  roomId?: string;
  view?: Issue;
  size?: SizeCard.small;
  createdAt: string;
  handleOpen?: () => void;
};

export const IssueCard: React.FC<Props> = ({
  id,
  title,
  link,
  priority,
  isDone,
  roomId,
  view,
  size,
  createdAt,
  handleOpen,
}) => {
  const deleteIssueData = {
    id: id,
    roomId: roomId as string,
  };
  const editIssueData = {
    id: id,
    title: title as string,
    link: link as string,
    priority: priority as Priority,
    isDone: isDone,
    roomId: roomId as string,
    createdAt,
    overall: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  const {
    issueState: { currentId },
    issueDispatch,
  } = useContext(IssueContext);

  const classes = useIssueCardStyles({
    view,
    isDone,
    id,
    currentId,
    size,
  });

  const handleCreate = () => {
    issueDispatch(EditIssueFalseActionCreator());
    if (handleOpen) {
      handleOpen();
    }
  };

  const handleUpdate = () => {
    issueDispatch(AddEditIssueActionCreator(editIssueData));
    issueDispatch(EditIssueTrueActionCreator());
    if (handleOpen) {
      handleOpen();
    }
  };

  return (
    <Paper elevation={3} className={classes.field}>
      {view === Issue.create ? (
        <>
          <Typography className={classes.title}>Create new Issue</Typography>
          <div className={classes.adminWView}>
            <Tooltip title="Add issue" placement="bottom-start">
              <IconButton
                className={classes.add}
                aria-label="add issue"
                onClick={handleCreate}
              >
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
            <Link href={link} color="inherit" target="_blank">
              <Typography className={classes.title}>{title}</Typography>
            </Link>
          </Tooltip>
          <Typography className={classes.priority}>{priority}</Typography>
        </div>
      )}
      {view === Issue.update && (
        <div className={classes.adminWView}>
          <Tooltip title="Edit issue" placement="bottom-start">
            <IconButton
              className={classes.edit}
              aria-label="edit issue"
              onClick={handleUpdate}
            >
              <CreateOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete issue" placement="bottom-start">
            <IconButton
              className={classes.delete}
              aria-label="delete issue"
              onClick={() => handleDeleteIssueSubmit(deleteIssueData)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {view === Issue.delete && (
        <div className={classes.adminWView}>
          <Tooltip title="Delete issue" placement="bottom-start">
            <IconButton
              className={classes.delete}
              aria-label="delete issue"
              onClick={() => handleDeleteIssueSubmit(deleteIssueData)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Paper>
  );
};
