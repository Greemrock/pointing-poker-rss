export enum VoutingActionsTypes {
  START_VOTING = 'START-VOTING',
  FINISH_VOTING = 'RELOAD-USERS',
  SET_CANDIDATE = 'SET-CANDIDATE',
  SET_NOMINATED = 'SET-NOMINATED',
  ADD_VOUTED_VOUTER = 'ADD-VOUTED-VOUTER',
  SET_PARTICIPANTS = 'SET-PARTICIPANTS',
}

export interface CandidateOrNominated {
  id: string;
  name: string;
}

export interface SetParticipants {
  type: VoutingActionsTypes.SET_PARTICIPANTS;
  payload: number;
}

export interface StartVoting {
  type: VoutingActionsTypes.START_VOTING;
}

export interface FinishVoting {
  type: VoutingActionsTypes.FINISH_VOTING;
}

export interface AddVouted {
  type: VoutingActionsTypes.ADD_VOUTED_VOUTER;
}

export interface SetCandidateUser {
  type: VoutingActionsTypes.SET_CANDIDATE;
  payload: CandidateOrNominated;
}

export interface SetNominatedUser {
  type: VoutingActionsTypes.SET_NOMINATED;
  payload: CandidateOrNominated;
}

export type VoutingActions =
  | StartVoting
  | FinishVoting
  | AddVouted
  | SetCandidateUser
  | SetParticipants
  | SetNominatedUser;
