import { ScoreActions, ScoreType, ScoreActionType } from './score.type';

export const initialScoreState: ScoreType = {
  results: [],
  isWaitingResults: false,
};

export const scoreReducer = (
  state: ScoreType = initialScoreState,
  action: ScoreActions
): ScoreType => {
  switch (action.type) {
    case ScoreActionType.UPDATE_SCORES:
      console.log(0);
      return {
        ...state,
        isWaitingResults: false,
        results: action.payload,
      };
    case ScoreActionType.RESET_SCORES:
      console.log(1);
      return {
        ...state,
        isWaitingResults: false,
        results: [
          ...state.results.map((el) => ({
            ...el,
            voteResult: '',
          })),
        ],
      };
    case ScoreActionType.SET_SCORES_WAITING:
      console.log(2);
      return {
        ...state,
        isWaitingResults: true,
      };
    default:
      return state;
  }
};
