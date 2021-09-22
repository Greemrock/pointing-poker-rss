import { Player } from './usersReducerInterfaces';
import {
  AddVouted,
  FinishVoting,
  SetCandidateUser,
  SetNominatedUser,
  SetParticipants,
  StartVoting,
  VoutingActionsTypes,
} from './voutingReducerInterfaces';

export const StartVoutingActionCreator = (): StartVoting => ({
  type: VoutingActionsTypes.START_VOTING,
});
export const FinishVoutingActionCreator = (): FinishVoting => ({
  type: VoutingActionsTypes.FINISH_VOTING,
});
export const AddVoutedActionCreator = (): AddVouted => ({
  type: VoutingActionsTypes.ADD_VOUTED_VOUTER,
});
export const SetCandidateActionCreator = (
  payload: Player
): SetCandidateUser => ({
  type: VoutingActionsTypes.SET_CANDIDATE,
  payload,
});
export const SetNominatedActionCreator = (
  payload: Player
): SetNominatedUser => ({
  type: VoutingActionsTypes.SET_NOMINATED,
  payload,
});
export const SetParticipantsActionCreator = (
  payload: number
): SetParticipants => ({
  type: VoutingActionsTypes.SET_PARTICIPANTS,
  payload,
});
