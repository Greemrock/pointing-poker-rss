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
import { handleUpdateIssueSubmit } from '../../../api/issue';
import {
  AddIdEditIssueActionCreator,
  IssueContext,
} from '../../../reducers/issue';

type Props = {
  id: string;
  title?: string;
  link?: string;
  priority?: Priority;
  view?: Issue;
  isDone: boolean;
  size?: SizeCard.small;
  handleOpen: () => void;
};

export const IssueCard: React.FC<Props> = ({
  id,
  title,
  link,
  priority,
  view,
  isDone,
  size,
  handleOpen,
}) => {
  //
  const currentId = '0';

  const classes = useIssueCardStyles({
    view,
    isDone,
    id,
    currentId,
    size,
  });
  const { issueState, issueDispatch } = useContext(IssueContext);

  const handleUpdate = () => {
    const data = {
      id: id,
      isEdit: true,
    };
    issueDispatch(AddIdEditIssueActionCreator(data));
    handleOpen();
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
                onClick={handleOpen}
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
            <IconButton className={classes.delete} aria-label="delete issue">
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {view === Issue.delete && (
        <div className={classes.adminWView}>
          <Tooltip title="Delete issue" placement="bottom-start">
            <IconButton className={classes.delete} aria-label="delete issue">
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Paper>
  );
};
