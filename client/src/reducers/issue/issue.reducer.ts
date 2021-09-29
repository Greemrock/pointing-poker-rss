import { Priority } from '../../Shared';
import { IssueActionType } from './issue.action';
import { IssueActions, IssueStateType } from './issue.type';

export const initialIssueState: IssueStateType = {
  issues: [
    {
      id: 'd',
      link: 'd',
      priority: Priority.hight,
      title: 'd',
      isDone: false,
      roomId: 'd',
    },
    {
      id: 'c',
      link: 'c',
      priority: Priority.hight,
      title: 'c',
      isDone: false,
      roomId: 'c',
    },
    {
      id: 'a',
      link: 'a',
      priority: Priority.hight,
      title: 'a',
      isDone: false,
      roomId: 'a',
    },
  ],
  isEdit: false,
  editIssue: {
    id: '',
    link: '',
    priority: Priority.low,
    title: '',
    isDone: false,
    roomId: '',
  },
  currentIssue: 0,
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
    case IssueActionType.NEXT_ISSUE:
      return {
        ...state,
        currentIssue: state.currentIssue + 1,
      };
    case IssueActionType.PREV_ISSUE:
      return {
        ...state,
        currentIssue: state.currentIssue - 1,
      };
    default:
      return state;
  }
};
