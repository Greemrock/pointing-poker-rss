import { IssueActionType } from './issue.action';
import {
  UpdateIssueAction,
  IssueType,
  AddIdEditIssueAction,
  EditIssueType,
  RemoveIdEditIssueAction,
} from './issue.type';

export const UpdateIssueActionCreator = (
  payload: IssueType[]
): UpdateIssueAction => ({
  type: IssueActionType.UPDATE_ISSUE,
  payload,
});

export const AddIdEditIssueActionCreator = (
  payload: EditIssueType
): AddIdEditIssueAction => ({
  type: IssueActionType.ADD_ID_EDIT_ISSUE,
  payload,
});

export const RemoveIdEditIssueActionCreator = (): RemoveIdEditIssueAction => ({
  type: IssueActionType.REMOVE_ID_EDIT_ISSUE,
  payload: { id: '', isEdit: false },
});
