import { Player } from '../users/users.type';
import {
  AddVoted,
  FinishVoting,
  SetCandidateUser,
  SetNominatedUser,
  SetParticipants,
  SetVoteId,
  StartVoting,
  VotingActionsTypes,
} from './vote.type';

export const StartVoutingActionCreator = (): StartVoting => ({
  type: VotingActionsTypes.START_VOTING,
});
export const FinishVoutingActionCreator = (): FinishVoting => ({
  type: VotingActionsTypes.FINISH_VOTING,
});
export const AddVoutedActionCreator = (): AddVoted => ({
  type: VotingActionsTypes.ADD_VOTED_VOTER,
});
export const SetCandidateActionCreator = (
  payload: Player
): SetCandidateUser => ({
  type: VotingActionsTypes.SET_CANDIDATE,
  payload,
});
export const SetNominatedActionCreator = (
  payload: Player
): SetNominatedUser => ({
  type: VotingActionsTypes.SET_NOMINATED,
  payload,
});
export const SetParticipantsActionCreator = (
  payload: number
): SetParticipants => ({
  type: VotingActionsTypes.SET_PARTICIPANTS,
  payload,
});
export const SetVoteIdActionCreator = (payload: string): SetVoteId => ({
  type: VotingActionsTypes.SET_VOTE_ID,
  payload,
});
