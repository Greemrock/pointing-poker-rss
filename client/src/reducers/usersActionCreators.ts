import {
  AddUserAction,
  AuthUserAction,
  Player,
  UsersActionsTypes,
  ReloadUsersAction,
} from './usersReducerInterfaces';

export const AuthActionCreator = (): AuthUserAction => ({
  type: UsersActionsTypes.AUTH,
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
