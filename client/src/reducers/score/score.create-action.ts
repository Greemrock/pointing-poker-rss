import { UpdateScoresAction, IssueScore, ScoreActionType } from './score.type';

export const UpdateScoreActionCreator = (
  payload: IssueScore[]
): UpdateScoresAction => ({
  type: ScoreActionType.UPDATE_SCORES,
  payload,
});
