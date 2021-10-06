import { Player } from '../users';
import {
  ScoreActions,
  ScoreType,
  ScoreActionType,
  IssueScore,
} from './score.type';

export const initialScoreState: ScoreType = {
  results: [],
  isWaitingResults: false,
  voteArray: [],
  wholeGameResults: [],
  isSelectedCard: true,
};

const createDefaultResults = (players: Player[]): IssueScore[] => {
  const playersCopy = [...players];
  return playersCopy.map((el, i) => ({
    id: `${i}`,
    issueId: '',
    userId: el.id,
    voteResult: '',
    roomId: el.roomId,
    cardType: '',
  }));
};

export const scoreReducer = (
  state: ScoreType = initialScoreState,
  action: ScoreActions
): ScoreType => {
  switch (action.type) {
    case ScoreActionType.UPDATE_SCORES:
      return {
        ...state,
        isWaitingResults: false,
        results: action.payload,
      };
    case ScoreActionType.RESET_SCORES:
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
      return {
        ...state,
        isWaitingResults: true,
      };
    case ScoreActionType.SET_DEFAULT_SCORES:
      return {
        ...state,
        results: createDefaultResults(action.payload),
      };
    case ScoreActionType.SET_VOTE_ARRAY:
      return {
        ...state,
        voteArray: action.payload,
      };
    case ScoreActionType.SET_WHOLE_GAME_RESULTS:
      return {
        ...state,
        wholeGameResults: action.payload,
      };
    case ScoreActionType.IS_SELECTED_CARD:
      return {
        ...state,
        isSelectedCard: action.payload,
      };
    default:
      return state;
  }
};
