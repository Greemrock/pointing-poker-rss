import axios from 'axios';
import { io } from 'socket.io-client';

const axiosInstance = axios.create({
  baseURL: 'https://safe-lowlands-48809.herokuapp.com/',
});

export const getAllPlayers = async (): Promise<requestPlayerType> => {
  const result = await axiosInstance.get('users');
  return result.data;
};

export const addPlayer = async (payload: payloadType): Promise<void> => {
  const result = await axiosInstance.post('users', payload);
};

export const socket = io('ws://safe-lowlands-48809.herokuapp.com', {
  transports: ['websocket'],
  upgrade: false,
});

export const handleSubmit = (payload: payloadType) => {
  socket.emit('hostGame', payload);
};

// socket.on('roomInfo', (roomInfo) => {
//   socket.emit('joinRoom', roomInfo.id);
// });
