export enum UsersActionsTypes {
  ADD_USER = 'ADD-USER',
  RELOAD_USERS = 'RELOAD-USERS',
  AUTH = 'AUTH',
  START_GAME = 'START-GAME',
}
export type Player = {
  id: string;
  name: string;
  surname: string;
  job: string;
  image: string | null;
  observer: boolean;
  isAdmin: boolean;
  roomId: string;
};

export interface AddUserAction {
  type: UsersActionsTypes.ADD_USER;
  payload: Player;
}

export interface ReloadUsersAction {
  type: UsersActionsTypes.RELOAD_USERS;
  payload: Player[];
}

export interface AuthUserAction {
  type: UsersActionsTypes.AUTH;
  payload: boolean;
}

export interface StartGameAction {
  type: UsersActionsTypes.START_GAME;
}

export type UsersActions =
  | AddUserAction
  | AuthUserAction
  | ReloadUsersAction
  | StartGameAction;
