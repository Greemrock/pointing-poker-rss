import { Priority } from '../../Shared';
import { IssueActionType } from './issue.action';
import { IssueActions, IssueStateType } from './issue.type';

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
    case IssueActionType.IS_EDIT_ISSUE:
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    default:
      return state;
  }
};
