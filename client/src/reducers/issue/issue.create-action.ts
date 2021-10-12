import {
  UpdateIssueAction,
  IssueType,
  AddEditIssueAction,
  EditIssueTrueAction,
  EditIssueFalseAction,
  NextIssueGameAction,
  PrevIssueGameAction,
  IssueActionType,
  SetCurrentIdGameAction,
  SetIssueDoneAction,
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

export const NextIssueActionCreator = (): NextIssueGameAction => ({
  type: IssueActionType.NEXT_ISSUE,
});

export const PrevIssueActionCreator = (): PrevIssueGameAction => ({
  type: IssueActionType.PREV_ISSUE,
});

export const SetCurrentIssueIdActionCreator = (
  payload: string
): SetCurrentIdGameAction => ({
  type: IssueActionType.SET_CURRENT_ISSUE_ID,
  payload,
});
export const SetIssueDoneActionCreator = (
  payload: string
): SetIssueDoneAction => ({
  type: IssueActionType.SET_ISSUE_DONE,
  payload,
});
