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
};

export type AddIssueAction = {
  type: IssueActionType.ADD_ISSUE;
  payload: IssueType;
};

export type IssueActions = AddIssueAction;
