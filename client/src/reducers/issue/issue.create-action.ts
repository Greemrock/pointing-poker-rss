import { IssueActionType } from './issue.action';
import { AddIssueAction, IssueType } from './issue.type';

export const AddIssueActionCreator = (payload: IssueType): AddIssueAction => ({
  type: IssueActionType.ADD_ISSUE,
  payload,
});
