import { Priority } from '../../Shared';
import { convertDate } from '../../Util/convertDate';
import {
  IssueActions,
  IssueActionType,
  IssueStateType,
  IssueType,
} from './issue.type';

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
    createdAt: '',
  },
  currentId: 'd',
  currentIdNumber: 0,
};

export const issueReducer = (
  state: IssueStateType = initialIssueState,
  action: IssueActions
): IssueStateType => {
  switch (action.type) {
    case IssueActionType.UPDATE_ISSUE:
      return {
        ...state,
        issues: action.payload.sort((a, b) => {
          return convertDate(a.createdAt) - convertDate(b.createdAt);
        }),
        currentId: action.payload[0].id,
      };
    case IssueActionType.SET_CURRENT_ISSUE_ID:
      return {
        ...state,
        currentId: action.payload,
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
        currentIdNumber: state.currentIdNumber + 1,
        currentId: state.issues[state.currentIdNumber + 1].id,
      };
    case IssueActionType.PREV_ISSUE:
      return {
        ...state,
        currentIdNumber: state.currentIdNumber - 1,
        currentId: state.issues[state.currentIdNumber - 1].id,
      };
    case IssueActionType.SET_ISSUE_DONE:
      console.log(3);
      return {
        ...state,
        issues: [
          ...state.issues
            .sort((a, b) => {
              return convertDate(a.createdAt) - convertDate(b.createdAt);
            })
            .map((el: IssueType) => {
              if (el.id === action.payload) el.isDone = true;
              return el;
            }),
        ],
      };
    default:
      return state;
  }
};
