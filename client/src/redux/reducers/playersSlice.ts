import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerState } from '../typesRedux';

const initialState: { users: PlayerState[] } = { users: [] };

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    changePlayers: (state, action: PayloadAction<PlayerState[]>) => {
      state.users = {
        ...state.users,
        ...action.payload,
      };
    },
  },
});

export const { changePlayers } = playersSlice.actions;

export const selectPlayerInfo = (state: PlayerState): PlayerState => state;

export default playersSlice.reducer;
