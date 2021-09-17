export enum UsersActionsTypes {
  ADD_USER = 'ADD-USER',
  REMOVE_USER = 'REMOVE-USER',
  AUTH = 'AUTH',
}
export type Player = {
  id: number;
  name: string;
  surname: string;
  job: string;
  image: string;
  observer: boolean;
  admin: boolean;
  position: string;
};

export interface AddUserAction {
  type: UsersActionsTypes.ADD_USER;
  payload: Player;
}
export interface AuthUserAction {
  type: UsersActionsTypes.AUTH;
}
export interface RemoveUserAction {
  type: UsersActionsTypes.REMOVE_USER;
  payload: number;
}

export type UsersActions = AddUserAction | AuthUserAction | RemoveUserAction;
