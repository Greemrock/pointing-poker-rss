import { Player } from '../users/users.type';

export enum VotingActionsTypes {
  START_VOTING = 'START-VOTING',
  FINISH_VOTING = 'RELOAD-USERS',
  SET_CANDIDATE = 'SET-CANDIDATE',
  SET_NOMINATED = 'SET-NOMINATED',
  ADD_VOTED_VOTER = 'ADD-VOTED-VOTER',
  SET_PARTICIPANTS = 'SET-PARTICIPANTS',
}

export interface SetParticipants {
  type: VotingActionsTypes.SET_PARTICIPANTS;
  payload: number;
}

export interface StartVoting {
  type: VotingActionsTypes.START_VOTING;
}

export interface FinishVoting {
  type: VotingActionsTypes.FINISH_VOTING;
}

export interface AddVoted {
  type: VotingActionsTypes.ADD_VOTED_VOTER;
}

export interface SetCandidateUser {
  type: VotingActionsTypes.SET_CANDIDATE;
  payload: Player;
}

export interface SetNominatedUser {
  type: VotingActionsTypes.SET_NOMINATED;
  payload: Player;
}

export type VoteActions =
  | StartVoting
  | FinishVoting
  | AddVoted
  | SetCandidateUser
  | SetParticipants
  | SetNominatedUser;
