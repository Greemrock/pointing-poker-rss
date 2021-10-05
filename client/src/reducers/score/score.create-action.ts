import { SetScoresWaitingAction } from '.';
import { Player } from '../users';
import {
  UpdateScoresAction,
  IssueScore,
  ScoreActionType,
  ResetScoresAction,
  SetDefaultScoreAction,
} from './score.type';

export const UpdateScoreActionCreator = (
  payload: IssueScore[]
): UpdateScoresAction => ({
  type: ScoreActionType.UPDATE_SCORES,
  payload,
});

export const ResetScoresActionCreator = (): ResetScoresAction => ({
  type: ScoreActionType.RESET_SCORES,
});

export const SetScoresWaitingActionCreator = (): SetScoresWaitingAction => ({
  type: ScoreActionType.SET_SCORES_WAITING,
});
export const SetDefaultScoreActionCreator = (
  payload: Player[]
): SetDefaultScoreAction => ({
  type: ScoreActionType.SET_DEFAULT_SCORES,
  payload,
});
