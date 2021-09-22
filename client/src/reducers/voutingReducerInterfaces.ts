import { Player } from './usersReducerInterfaces';

export enum VoutingActionsTypes {
  START_VOTING = 'START-VOTING',
  FINISH_VOTING = 'RELOAD-USERS',
  SET_CANDIDATE = 'SET-CANDIDATE',
  SET_NOMINATED = 'SET-NOMINATED',
  ADD_VOUTED_VOUTER = 'ADD-VOUTED-VOUTER',
  SET_PARTICIPANTS = 'SET-PARTICIPANTS',
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
  payload: Player;
}

export interface SetNominatedUser {
  type: VoutingActionsTypes.SET_NOMINATED;
  payload: Player;
}

export type VoutingActions =
  | StartVoting
  | FinishVoting
  | AddVouted
  | SetCandidateUser
  | SetParticipants
  | SetNominatedUser;
