import { UsersActions, UsersActionsTypes } from './users.type';

import { Player } from './users.type';

export type AppState = {
  isAuth: boolean;
  players: Player[];
  currentPlayer: Player;
  isGameStarted: boolean;
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
  isGameStarted: false,
};
export const usersReducer = (
  state: AppState = initialState,
  action: UsersActions
): AppState => {
  switch (action.type) {
    case UsersActionsTypes.AUTH:
      return {
        ...state,
        isAuth: action.payload,
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
    case UsersActionsTypes.START_GAME:
      return {
        ...state,
        isGameStarted: true,
      };
    default:
      return state;
  }
};
