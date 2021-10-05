import { Player } from '../users';

export enum ScoreActionType {
  UPDATE_SCORES = 'UPDATE_SCORES',
  SET_DEFAULT_SCORES = 'SET-DEFAULT-SCORES',
  RESET_SCORES = 'RESET_SCORES',
  SET_SCORES_WAITING = 'SET-SCORES-WAINTING',
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

export type ScoreActions =
  | UpdateScoresAction
  | SetDefaultScoreAction
  | SetScoresWaitingAction
  | ResetScoresAction;
