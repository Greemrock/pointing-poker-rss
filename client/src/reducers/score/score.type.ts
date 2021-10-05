import { Player } from '../users';

export enum ScoreActionType {
  UPDATE_SCORES = 'UPDATE_SCORES',
  SET_DEFAULT_SCORES = 'SET-DEFAULT-SCORES',
  RESET_SCORES = 'RESET_SCORES',
  SET_SCORES_WAITING = 'SET-SCORES-WAINTING',
  SET_VOTE_ARRAY = 'SET-VOTE-ARRAY',
  SET_WHOLE_GAME_RESULTS = 'SET-WHOLE-GAME-RESULTS',
}

export type IssueScore = {
  id: string;
  issueId: string;
  userId: string;
  voteResult: string;
  roomId: string;
  cardType: string;
};

export type ScoreType = {
  results: IssueScore[];
  isWaitingResults: boolean;
  voteArray: number[];
  wholeGameResults: IssueScore[];
};

export type UpdateScoresAction = {
  type: ScoreActionType.UPDATE_SCORES;
  payload: IssueScore[];
};
export type ResetScoresAction = {
  type: ScoreActionType.RESET_SCORES;
};
export type SetScoresWaitingAction = {
  type: ScoreActionType.SET_SCORES_WAITING;
};
export type SetDefaultScoreAction = {
  type: ScoreActionType.SET_DEFAULT_SCORES;
  payload: Player[];
};
export type SetVoteArrayAction = {
  type: ScoreActionType.SET_VOTE_ARRAY;
  payload: number[];
};
export type SetWholeResultsAction = {
  type: ScoreActionType.SET_WHOLE_GAME_RESULTS;
  payload: IssueScore[];
};

export type ScoreActions =
  | UpdateScoresAction
  | SetDefaultScoreAction
  | SetScoresWaitingAction
  | ResetScoresAction
  | SetVoteArrayAction
  | SetWholeResultsAction;
