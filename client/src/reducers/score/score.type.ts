export enum ScoreActionType {
  UPDATE_SCORES = 'UPDATE_SCORES',
  UPDATE_MY_SCORE = 'UPDATE_MY_SCORES',
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
};

export type UpdateScoresAction = {
  type: ScoreActionType.UPDATE_SCORES;
  payload: IssueScore[];
};
export type UpdateMyScoreAction = {
  type: ScoreActionType.UPDATE_MY_SCORE;
  payload: IssueScore;
};

export type ScoreActions = UpdateScoresAction | UpdateMyScoreAction;
