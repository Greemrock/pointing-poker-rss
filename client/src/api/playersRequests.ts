import { io } from 'socket.io-client';
import { Sets } from '../reducers/settings';

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

export const handleSendSettings = (payload: Sets): void => {
  socket.emit('sendSettings', payload);
};
