import { UsersActions, UsersActionsTypes } from './usersReducerInterfaces';

import { Player } from './usersReducerInterfaces';

export type AppState = {
  isAuth: boolean;
  players: Player[];
  currentPlayer: null | Player;
};

export const initialState: AppState = {
  isAuth: false,
  players: [
    {
      id: 'qweqwee',
      name: 'Andrei',
      surname: 'A',
      job: 'developer',
      isAdmin: false,
      image: null,
      observer: false,
      roomId: '',
    },
    {
      id: 'qwewqeqeweqw',
      name: 'Sergey',
      surname: 'S',
      job: 'developer',
      isAdmin: false,
      image: null,
      observer: false,
      roomId: '',
    },
    {
      id: 'qweqweqwewqe',
      name: 'Artem',
      surname: 'A',
      job: 'developer',
      isAdmin: false,
      image: null,
      observer: false,
      roomId: '',
    },
  ],
  currentPlayer: null,
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
    case UsersActionsTypes.REMOVE_USER:
      return {
        ...state,
        players: state.players.filter((el: Player) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
