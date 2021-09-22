import { Priority } from './../../Shared/enums';
import { IssueActionType } from './issue.action';

export type IssueType = {
  id: string;
  link: string;
  priority: Priority;
  title: string;
  isDone: boolean;
  roomId: string;
};

export type IssueStateType = {
  issue: IssueType[];
  editIssue: EditIssueType;
};

export type EditIssueType = {
  id: string;
  isEdit: boolean;
};

export type UpdateIssueAction = {
  type: IssueActionType.UPDATE_ISSUE;
  payload: IssueType[];
};

export type AddIdEditIssueAction = {
  type: IssueActionType.ADD_ID_EDIT_ISSUE;
  payload: EditIssueType;
};

export type RemoveIdEditIssueAction = {
  type: IssueActionType.REMOVE_ID_EDIT_ISSUE;
  payload: EditIssueType;
};

export type IssueActions =
  | AddIdEditIssueAction
  | RemoveIdEditIssueAction
  | UpdateIssueAction;
