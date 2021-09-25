import { UsersActions, UsersActionsTypes } from './usersReducerInterfaces';

import { Player } from './usersReducerInterfaces';

export type AppState = {
  isAuth: boolean;
  players: Player[];
  currentPlayer: Player;
};

export const initialState: AppState = {
  isAuth: false,
  players: [],
  currentPlayer: {
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
export const usersReducer = (
  state: AppState = initialState,
  action: UsersActions
): AppState => {
  switch (action.type) {
    case UsersActionsTypes.AUTH:
      return {
        ...state,
        isAuth: true,
      };
    case UsersActionsTypes.ADD_USER:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case UsersActionsTypes.RELOAD_USERS:
      return {
        ...state,
        players: action.payload,
      };
    default:
      return state;
  }
};