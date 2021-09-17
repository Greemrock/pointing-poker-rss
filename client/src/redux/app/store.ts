import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { playerApi } from '../api/playerApi';

export const store = configureStore({
  reducer: {
    [playerApi.reducerPath]: playerApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(playerApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
