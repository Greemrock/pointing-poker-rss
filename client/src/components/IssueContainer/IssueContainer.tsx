import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Issue } from '../../Shared/enums';
import { IssueCard } from '../IssueCard';
import { useIssueContainerStyles } from './IssueContainer.styled';
import { IssueType } from '../../Shared/types';

type Props = {
  issues: IssueType[];
  view?: Issue;
};

export const IssueContainer: React.FC<Props> = ({ issues, view }) => {
  const classes = useIssueContainerStyles();
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
          />
        ))}
      </Container>
    </>
  );
};
