import { io } from 'socket.io-client';

export const socket = io('wss://safe-lowlands-48809.herokuapp.com', {
  transports: ['websocket'],
  upgrade: false,
});

export const handleAdminSubmit = (payload: payloadType): void => {
  socket.emit('hostGame', payload);
};

export const handleUserSubmit = (payload: payloadType): void => {
  socket.emit('joinGame', payload);
};

export type payloadMessage = {
  id: string;
  name: string;
  surname: string;
  image: string | null;
  roomId: string;
  message: string;
};

export const handleMessageSubmit = (payload: payloadMessage): void => {
  socket.emit('msgToServer', payload);
};
