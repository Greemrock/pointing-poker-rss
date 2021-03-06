import { VoteActions, VotingActionsTypes, VoteState } from './vote.type';
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
  voteId: '',
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
    case VotingActionsTypes.SET_VOTE_ID:
      return {
        ...state,
        voteId: action.payload,
      };

    default:
      return state;
  }
};
