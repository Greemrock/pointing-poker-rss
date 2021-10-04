import { Priority } from '../../Shared';
import { IssueActions, IssueActionType, IssueStateType } from './issue.type';

export const initialIssueState: IssueStateType = {
  issues: [],
  isEdit: false,
  editIssue: {
    id: '',
    link: '',
    priority: Priority.low,
    title: '',
    isDone: false,
    roomId: '',
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
        issues: action.payload,
      };
    case IssueActionType.ADD_EDIT_ISSUE:
      return {
        ...state,
        editIssue: action.payload,
      };
    case IssueActionType.EDIT_ISSUE_TRUE:
      return {
        ...state,
        isEdit: true,
      };
    case IssueActionType.EDIT_ISSUE_FALSE:
      return {
        ...state,
        isEdit: false,
      };
    default:
      return state;
  }
};
