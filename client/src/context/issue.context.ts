import React from 'react';
import { initialIssueState } from '../reducers/issue/issue.reducer';
import { IssueStateType, IssueActions } from '../reducers/issue/issue.type';

export const IssueContext = React.createContext<{
  issueState: IssueStateType;
  issueDispatch: React.Dispatch<IssueActions>;
}>({
  issueState: initialIssueState,
  issueDispatch: () => null,
});
