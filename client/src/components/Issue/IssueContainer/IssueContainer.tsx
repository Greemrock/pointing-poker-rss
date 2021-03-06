import React, { useContext, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Issue, SizeCard } from '../../../Shared/enums';
import { IssueCard } from '../IssueCard';
import { useIssueContainerStyles } from './IssueContainer.styled';
import { IssueDialogForm } from '../IssueDialogForm';
import { IssueContext } from '../../../context/issue.context';

type Props = {
  view?: Issue;
};

export const IssueContainer: React.FC<Props> = ({ view }) => {
  const classes = useIssueContainerStyles({ view });
  const [open, setOpen] = useState(false);
  const { issueState } = useContext(IssueContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h6" align="center" className={classes.title}>
        Issue:
      </Typography>
      <Container className={classes.container} maxWidth="md">
        {issueState.issues.map(
          ({ id, link, isDone, priority, title, roomId, createdAt }) => {
            return (
              <IssueCard
                key={id}
                id={id}
                link={link}
                isDone={isDone}
                priority={priority}
                title={title}
                roomId={roomId}
                view={view}
                createdAt={createdAt}
                handleOpen={handleOpen}
              />
            );
          }
        )}
        {view && view !== Issue.game && (
          <IssueCard
            id={Issue.create}
            view={Issue.create}
            isDone={false}
            size={view === Issue.delete ? SizeCard.small : undefined}
            createdAt={''}
            handleOpen={handleOpen}
          />
        )}
      </Container>
      <IssueDialogForm open={open} handleClose={handleClose} />
    </div>
  );
};
