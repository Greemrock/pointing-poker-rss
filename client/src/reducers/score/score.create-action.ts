import { SetScoresWaitingAction } from '.';
import { Player } from '../users';
import {
  UpdateScoresAction,
  IssueScore,
  ScoreActionType,
  ResetScoresAction,
  SetDefaultScoreAction,
  SetVoteArrayAction,
  SetWholeResultsAction,
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

export const SetVoteArrayActionCreator = (
  payload: number[]
): SetVoteArrayAction => ({
  type: ScoreActionType.SET_VOTE_ARRAY,
  payload,
});

export const SetWholeResultsActionCreator = (
  payload: IssueScore[]
): SetWholeResultsAction => ({
  type: ScoreActionType.SET_WHOLE_GAME_RESULTS,
  payload,
});
