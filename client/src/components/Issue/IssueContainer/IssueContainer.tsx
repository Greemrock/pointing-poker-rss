import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Issue, SizeCard } from '../../../Shared/enums';
import { IssueCard } from '../IssueCard';
import { useIssueContainerStyles } from './IssueContainer.styled';
import { IssueType } from '../../../Shared/types';
import { IssueDialogForm } from '../IssueDialogForm';

type Props = {
  issues: IssueType[];
  view?: Issue;
};

export const IssueContainer: React.FC<Props> = ({ issues, view }) => {
  const classes = useIssueContainerStyles();
  const [open, setOpen] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [idEditIssue, setIdEditIssue] = useState('');

  const handleClickOpen = (isEdit: boolean, id: string) => {
    setIdEditIssue(id);
    setOpen(true);
    setIsEditForm(isEdit);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h6" align="center" className={classes.title}>
        Issue:
      </Typography>
      <Container className={classes.container} maxWidth="md">
        {issues.map(({ id, currentId, link, isDone, priority, title }) => (
          <IssueCard
            key={id}
            id={id}
            link={link}
            currentId={currentId}
            isDone={isDone}
            priority={priority}
            title={title}
            view={view}
            handleClickOpen={handleClickOpen}
          />
        ))}
        {view ? (
          <IssueCard
            id={Issue.create}
            currentId={'0'}
            view={Issue.create}
            isDone={false}
            size={view === Issue.delete ? SizeCard.small : undefined}
            handleClickOpen={handleClickOpen}
          />
        ) : null}
      </Container>
      <IssueDialogForm
        open={open}
        handleClose={handleClose}
        isEditForm={isEditForm}
        issues={issues}
        idEditIssue={idEditIssue}
      />
    </>
  );
};
