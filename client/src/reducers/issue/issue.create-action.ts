import { IssueActionType } from './issue.action';
import {
  UpdateIssueAction,
  IssueType,
  AddEditIssueAction,
  IsEditIssueAction,
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

export const IsEditIssueActionCreator = (): IsEditIssueAction => ({
  type: IssueActionType.IS_EDIT_ISSUE,
});
