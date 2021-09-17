import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

export type PlayerState = {
  id: string;
  name: string;
  surname: string;
  job: string;
  image: string;
  observer: boolean;
  isAdmin: boolean;
};

const initialState: PlayerState = {
  id: '',
  name: '',
  surname: '',
  job: '',
  image: '',
  observer: false,
  isAdmin: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    getPlayer: (state) => {
      state;
    },
  },
});

export const {} = playerSlice.actions;

// export const selectPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;
