import { Player } from './usersReducerInterfaces';
import {
  VoutingActions,
  VoutingActionsTypes,
} from './voutingReducerInterfaces';

export type VoutingState = {
  voutingStarted: boolean;
  voutersCount: number;
  voutedCount: number;
  candidate: Player;
  nominated: Player;
};

export const initialState = {
  voutingStarted: false,
  voutersCount: 0,
  voutedCount: 0,
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

export const VoutingReducer = (
  state: VoutingState = initialState,
  action: VoutingActions
): VoutingState => {
  switch (action.type) {
    case VoutingActionsTypes.START_VOTING:
      return {
        ...state,
        voutingStarted: true,
      };
    case VoutingActionsTypes.FINISH_VOTING:
      return {
        ...state,
        voutingStarted: false,
      };
    case VoutingActionsTypes.ADD_VOUTED_VOUTER:
      return {
        ...state,
        voutedCount: (state.voutedCount += 1),
      };
    case VoutingActionsTypes.SET_CANDIDATE:
      return {
        ...state,
        candidate: action.payload,
      };
    case VoutingActionsTypes.SET_NOMINATED:
      return {
        ...state,
        nominated: action.payload,
      };
    case VoutingActionsTypes.SET_PARTICIPANTS:
      return {
        ...state,
        voutersCount: action.payload,
      };
    default:
      return state;
  }
};
