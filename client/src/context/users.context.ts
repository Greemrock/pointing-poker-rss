import React from 'react';
import { AppState, initialState } from '../reducers/users/users.reducer';
import { UsersActions } from '../reducers/users/users.type';

export const UsersContext = React.createContext<{
  appState: AppState;
  dispatch: React.Dispatch<UsersActions>;
}>({
  appState: initialState,
  dispatch: () => null,
});
