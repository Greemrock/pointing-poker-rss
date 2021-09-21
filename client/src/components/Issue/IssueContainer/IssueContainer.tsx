import React, { useContext, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Issue, SizeCard } from '../../../Shared/enums';
import { IssueCard } from '../IssueCard';
import { useIssueContainerStyles } from './IssueContainer.styled';
import { IssueType } from '../../../Shared/types';
import { IssueDialogForm } from '../IssueDialogForm';
import { IssueContext } from '../../../reducers/issue/issue.context';

type Props = {
  view?: Issue;
};

export const IssueContainer: React.FC<Props> = ({ view }) => {
  const classes = useIssueContainerStyles();
  const [open, setOpen] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [idEditIssue, setIdEditIssue] = useState('');
  const { issueState, issueDispatch } = useContext(IssueContext);

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
        {issueState.issue.map(({ id, link, isDone, priority, title }) => (
          <IssueCard
            key={id}
            id={id}
            link={link}
            isDone={isDone}
            priority={priority}
            title={title}
            view={view}
            handleClickOpen={handleClickOpen}
          />
        ))}
        {view && (
          <IssueCard
            id={Issue.create}
            view={Issue.create}
            isDone={false}
            size={view === Issue.delete ? SizeCard.small : undefined}
            handleClickOpen={handleClickOpen}
          />
        )}
      </Container>
      <IssueDialogForm
        open={open}
        handleClose={handleClose}
        isEditForm={isEditForm}
        idEditIssue={idEditIssue}
      />
    </>
  );
};
