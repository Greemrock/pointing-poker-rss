import { SetScoresWaitingAction } from '.';
import {
  UpdateScoresAction,
  IssueScore,
  ScoreActionType,
  ResetScoresAction,
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
