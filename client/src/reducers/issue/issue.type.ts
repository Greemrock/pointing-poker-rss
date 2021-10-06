import { Priority } from './../../Shared/enums';

export enum IssueActionType {
  UPDATE_ISSUE = 'UPDATE_ISSUE',
  ADD_EDIT_ISSUE = 'ADD_EDIT_ISSUE',
  EDIT_ISSUE_TRUE = 'EDIT_ISSUE_TRUE',
  EDIT_ISSUE_FALSE = 'EDIT_ISSUE_FALSE',
  NEXT_ISSUE = 'NEXT-ISSUE',
  PREV_ISSUE = 'PREV-ISSUE',
  SET_CURRENT_ISSUE_ID = 'SET-CURRENT-ISSUE-ID',
  SET_ISSUE_DONE = 'SET-ISSUE-DONE',
}

export type IssueType = {
  createdAt: string;
  id: string;
  link: string;
  priority: Priority;
  title: string;
  isDone: boolean;
  roomId: string;
  overall: number[];
};

export type IssueStateType = {
  issues: IssueType[];
  isEdit: boolean;
  editIssue: IssueType;
  currentId: string;
  currentIdNumber: number;
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

export type NextIssueGameAction = {
  type: IssueActionType.NEXT_ISSUE;
};

export type PrevIssueGameAction = {
  type: IssueActionType.PREV_ISSUE;
};

export type SetIssueDoneAction = {
  type: IssueActionType.SET_ISSUE_DONE;
  payload: string;
};

export type SetCurrentIdGameAction = {
  type: IssueActionType.SET_CURRENT_ISSUE_ID;
  payload: string;
};

export type IssueActions =
  | AddEditIssueAction
  | EditIssueTrueAction
  | UpdateIssueAction
  | EditIssueFalseAction
  | NextIssueGameAction
  | PrevIssueGameAction
  | SetCurrentIdGameAction
  | SetIssueDoneAction;
