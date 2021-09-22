import { IssueActionType } from './issue.action';
import {
  UpdateIssueAction,
  IssueType,
  AddEditIssueAction,
  EditIssueTrueAction,
  EditIssueFalseAction,
} from './issue.type';

export const UpdateIssueActionCreator = (
  payload: IssueType[]
): UpdateIssueAction => ({
  type: IssueActionType.UPDATE_ISSUE,
  payload,
});

export const AddEditIssueActionCreator = (
  payload: IssueType
): AddEditIssueAction => ({
  type: IssueActionType.ADD_EDIT_ISSUE,
  payload,
});

export const EditIssueTrueActionCreator = (): EditIssueTrueAction => ({
  type: IssueActionType.EDIT_ISSUE_TRUE,
});

export const EditIssueFalseActionCreator = (): EditIssueFalseAction => ({
  type: IssueActionType.EDIT_ISSUE_FALSE,
});
