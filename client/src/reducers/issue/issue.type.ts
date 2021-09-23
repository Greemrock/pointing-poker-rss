import { Priority } from './../../Shared/enums';

export enum IssueActionType {
  UPDATE_ISSUE = 'UPDATE_ISSUE',
  ADD_EDIT_ISSUE = 'ADD_EDIT_ISSUE',
  EDIT_ISSUE_TRUE = 'EDIT_ISSUE_TRUE',
  EDIT_ISSUE_FALSE = 'EDIT_ISSUE_FALSE',
}

export type IssueType = {
  id: string;
  link: string;
  priority: Priority;
  title: string;
  isDone: boolean;
  roomId: string;
};

export type IssueStateType = {
  issues: IssueType[];
  isEdit: boolean;
  editIssue: IssueType;
};

export type UpdateIssueAction = {
  type: IssueActionType.UPDATE_ISSUE;
  payload: IssueType[];
};

export type AddEditIssueAction = {
  type: IssueActionType.ADD_EDIT_ISSUE;
  payload: IssueType;
};

export type EditIssueTrueAction = {
  type: IssueActionType.EDIT_ISSUE_TRUE;
};

export type EditIssueFalseAction = {
  type: IssueActionType.EDIT_ISSUE_FALSE;
};

export type IssueActions =
  | AddEditIssueAction
  | EditIssueTrueAction
  | UpdateIssueAction
  | EditIssueFalseAction;
