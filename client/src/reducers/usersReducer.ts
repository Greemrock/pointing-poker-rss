import { UsersActions, UsersActionsTypes } from './usersReducerInterfaces';

type Player = {
  id: number;
  name: string;
  surname: string;
  job: string;
};
export type AppState = {
  isAuth: boolean;
  players: Player[];
};

export const initialState: AppState = {
  isAuth: false,
  players: [
    { id: 0, name: 'Andrei', surname: 'A', job: 'developer' },
    { id: 1, name: 'Sergey', surname: 'S', job: 'developer' },
    { id: 2, name: 'Artem', surname: 'A', job: 'developer' },
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
