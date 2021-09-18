import { configureStore } from '@reduxjs/toolkit';
import playersSlice from '../reducers/playersSlice';

export const store = configureStore({
  reducer: {
    players: playersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
