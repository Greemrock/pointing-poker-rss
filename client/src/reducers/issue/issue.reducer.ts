import { Priority } from '../../Shared';
import { IssueActions, IssueActionType, IssueStateType } from './issue.type';

export const initialIssueState: IssueStateType = {
  issues: [
    {
      id: '0',
      link: './link',
      priority: Priority.low,
      title: 'Issue#1',
      isDone: true,
      roomId: '0',
    },
    {
      id: '1',
      link: './link',
      priority: Priority.low,
      title: 'Issue#2',
      isDone: true,
      roomId: '0',
    },
    {
      id: '2',
      link: './link',
      priority: Priority.low,
      title: 'Issue#3',
      isDone: true,
      roomId: '0',
    },
    {
      id: '0',
      link: './link',
      priority: Priority.low,
      title: 'Issue#1',
      isDone: true,
      roomId: '0',
    },
    {
      id: '1',
      link: './link',
      priority: Priority.low,
      title: 'Issue#2',
      isDone: true,
      roomId: '0',
    },
    {
      id: '2',
      link: './link',
      priority: Priority.low,
      title: 'Issue#3',
      isDone: true,
      roomId: '0',
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
