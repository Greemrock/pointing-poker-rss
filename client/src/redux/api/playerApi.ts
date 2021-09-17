import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';

export type Channel = 'redux' | 'general';

const User = {
  name: 'Harry',
  surname: 'hary',
  job: 'FE',
  image: './link',
  observer: false,
  isAdmin: true,
};

export interface DataPlayer {
  name: string;
  surname: string;
  job: string;
  image: string;
  observer: boolean;
  isAdmin: boolean;
}

export const playerApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    postPlayer: build.query<DataPlayer, Channel>({
      query: () => '',
      async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved }) {
        const ws = io('ws://safe-lowlands-48809.herokuapp.com', {
          transports: ['websocket'],
          upgrade: false,
        });
        try {
          await cacheDataLoaded;
          ws.emit('create_room');
          ws.emit('new_player', User);
        } catch {
          console.log('Something went wrong');
        }
        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { usePostPlayerQuery } = playerApi;
