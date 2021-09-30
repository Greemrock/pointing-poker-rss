import {
  AddUserAction,
  AuthUserAction,
  Player,
  UsersActionsTypes,
  ReloadUsersAction,
} from './users.type';

export const AuthActionCreator = (payload: boolean): AuthUserAction => ({
  type: UsersActionsTypes.AUTH,
  payload,
});

export const AddUserActionCreator = (payload: Player): AddUserAction => ({
  type: UsersActionsTypes.ADD_USER,
  payload,
});

export const ReloadUsersActionCreator = (
  payload: Player[]
): ReloadUsersAction => ({
  type: UsersActionsTypes.RELOAD_USERS,
  payload,
});
