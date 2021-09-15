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

  const handleClickOpen = (isEdit: boolean) => {
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
        {issues.map(({ id, currentId, linkCard, isDone, priority, title }) => (
          <IssueCard
            key={id}
            id={id}
            linkCard={linkCard}
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
            id={-1}
            currentId={0}
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
      />
    </>
  );
};
