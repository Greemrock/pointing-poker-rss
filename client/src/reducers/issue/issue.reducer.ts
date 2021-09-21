import { IssueActionType } from './issue.action';
import { IssueActions, IssueStateType } from './issue.type';

export const initialIssueState: IssueStateType = {
  issue: [],
};

export const issueReducer = (
  state: IssueStateType = initialIssueState,
  action: IssueActions
): IssueStateType => {
  switch (action.type) {
    case IssueActionType.ADD_ISSUE:
      return {
        ...state,
        issue: [...state.issue, action.payload],
      };
    default:
      return state;
  }
};
