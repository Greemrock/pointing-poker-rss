import { IssueActionType } from './issue.action';
import { IssueActions, IssueStateType } from './issue.type';

export const initialIssueState: IssueStateType = {
  issue: [],
  editIssue: {
    id: '',
    isEdit: false,
  },
};

export const issueReducer = (
  state: IssueStateType = initialIssueState,
  action: IssueActions
): IssueStateType => {
  switch (action.type) {
    case IssueActionType.UPDATE_ISSUE:
      return {
        ...state,
        issue: action.payload,
      };
    case IssueActionType.ADD_ID_EDIT_ISSUE:
      return {
        ...state,
        editIssue: action.payload,
      };
    case IssueActionType.REMOVE_ID_EDIT_ISSUE:
      return {
        ...state,
        editIssue: action.payload,
      };
    default:
      return state;
  }
};
