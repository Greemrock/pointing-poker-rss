import { ScoreActions, ScoreType, ScoreActionType } from './score.type';

export const initialScoreState: ScoreType = {
  results: [],
};

export const scoreReducer = (
  state: ScoreType = initialScoreState,
  action: ScoreActions
): ScoreType => {
  switch (action.type) {
    case ScoreActionType.UPDATE_SCORES:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
