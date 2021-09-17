import {
  AddUserAction,
  AuthUserAction,
  RemoveUserAction,
  Player,
  UsersActionsTypes,
} from './usersReducerInterfaces';

export const AuthActionCreator = (): AuthUserAction => ({
  type: UsersActionsTypes.AUTH,
});

export const AddUserActionCreator = (payload: Player): AddUserAction => ({
  type: UsersActionsTypes.ADD_USER,
  payload,
});

export const RemoveUserActionCreator = (payload: number): RemoveUserAction => ({
  type: UsersActionsTypes.REMOVE_USER,
  payload,
});
