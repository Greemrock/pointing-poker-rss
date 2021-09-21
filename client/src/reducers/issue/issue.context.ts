import React from 'react';
import { initialIssueState } from './issue.reducer';
import { IssueStateType, IssueActions } from './issue.type';

export const IssueContext = React.createContext<{
  issueState: IssueStateType;
  issueDispatch: React.Dispatch<IssueActions>;
}>({
  issueState: initialIssueState,
  issueDispatch: () => null,
});
