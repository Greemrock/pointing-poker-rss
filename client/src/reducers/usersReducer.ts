import { UsersActions, UsersActionsTypes } from './usersReducerInterfaces';

type Player = {
  id: string;
  name: string;
  surname: string;
  job: string;
  isAdmin: boolean;
  image: string | null;
};
export type AppState = {
  isAuth: boolean;
  players: Player[];
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
    },
    {
      id: 'qwewqeqeweqw',
      name: 'Sergey',
      surname: 'S',
      job: 'developer',
      isAdmin: false,
      image: null,
    },
    {
      id: 'qweqweqwewqe',
      name: 'Artem',
      surname: 'A',
      job: 'developer',
      isAdmin: false,
      image: null,
    },
  ],
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
        players: [...state.players, action.payload],
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
