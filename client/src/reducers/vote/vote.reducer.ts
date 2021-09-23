import { Player } from '../users/users.type';
import { VoteActions, VotingActionsTypes } from './vote.type';

export type VoteState = {
  votingStarted: boolean;
  votersCount: number;
  votedCount: number;
  candidate: Player;
  nominated: Player;
};

export const initialState = {
  votingStarted: false,
  votersCount: 0,
  votedCount: 0,
  candidate: {
    id: '',
    name: '',
    surname: '',
    job: '',
    image: null,
    observer: false,
    isAdmin: false,
    roomId: '',
  },
  nominated: {
    id: '',
    name: '',
    surname: '',
    job: '',
    image: null,
    observer: false,
    isAdmin: false,
    roomId: '',
  },
};

export const VoteReducer = (
  state: VoteState = initialState,
  action: VoteActions
): VoteState => {
  switch (action.type) {
    case VotingActionsTypes.START_VOTING:
      return {
        ...state,
        votingStarted: true,
      };
    case VotingActionsTypes.FINISH_VOTING:
      return {
        ...state,
        votingStarted: false,
      };
    case VotingActionsTypes.ADD_VOTED_VOTER:
      return {
        ...state,
        votedCount: (state.votedCount += 1),
      };
    case VotingActionsTypes.SET_CANDIDATE:
      return {
        ...state,
        candidate: action.payload,
      };
    case VotingActionsTypes.SET_NOMINATED:
      return {
        ...state,
        nominated: action.payload,
      };
    case VotingActionsTypes.SET_PARTICIPANTS:
      return {
        ...state,
        votersCount: action.payload,
      };
    default:
      return state;
  }
};
