import { UsersActions, UsersActionsTypes } from './users.type';

import { Player } from './users.type';

export type AppState = {
  isAuth: boolean;
  players: Player[];
  currentPlayer: Player;
};

export const initialState: AppState = {
  isAuth: false,
  players: [
    {
      id: 'player0',
      name: 'aaa',
      surname: 'aaa',
      job: 'aaa',
      image: '',
      isAdmin: true,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player1',
      name: 'bbb',
      surname: 'bbb',
      job: 'bbb',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player2',
      name: 'ccc',
      surname: 'ccc',
      job: 'ccc',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player3',
      name: 'ddd',
      surname: 'ddd',
      job: 'ddd',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player4',
      name: 'qqqq',
      surname: 'qqqq',
      job: 'qqqq',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player5',
      name: 'wwww',
      surname: 'www',
      job: 'www',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player6',
      name: 'aaa',
      surname: 'aaa',
      job: 'aaa',
      image: '',
      isAdmin: true,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player7',
      name: 'bbb',
      surname: 'bbb',
      job: 'bbb',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player8',
      name: 'ccc',
      surname: 'ccc',
      job: 'ccc',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player9',
      name: 'ddd',
      surname: 'ddd',
      job: 'ddd',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player10',
      name: 'qqqq',
      surname: 'qqqq',
      job: 'qqqq',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
    {
      id: 'player11',
      name: 'wwww',
      surname: 'www',
      job: 'www',
      image: '',
      isAdmin: false,
      observer: false,
      roomId: 'room0',
    },
  ],
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
    default:
      return state;
  }
};
