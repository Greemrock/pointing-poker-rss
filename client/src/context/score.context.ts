import React from 'react';
import { initialScoreState, ScoreType, ScoreActions } from '../reducers/score/';

export const ScoreContext = React.createContext<{
  scoreState: ScoreType;
  scoreDispatch: React.Dispatch<ScoreActions>;
}>({
  scoreState: initialScoreState,
  scoreDispatch: () => null,
});
