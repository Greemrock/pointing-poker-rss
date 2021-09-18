export enum UsersActionsTypes {
  ADD_USER = 'ADD-USER',
  RELOAD_USERS = 'RELOAD-USERS',
  REMOVE_USER = 'REMOVE-USER',
  AUTH = 'AUTH',
}
export type Player = {
  id: string;
  name: string;
  surname: string;
  job: string;
  image: string;
  observer: boolean;
  isAdmin: boolean;
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
}
export interface RemoveUserAction {
  type: UsersActionsTypes.REMOVE_USER;
  payload: string;
}

export type UsersActions =
  | AddUserAction
  | AuthUserAction
  | RemoveUserAction
  | ReloadUsersAction;
