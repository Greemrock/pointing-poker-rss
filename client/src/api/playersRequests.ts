import axios from 'axios';
import { io } from 'socket.io-client';
import { Player } from '../reducers/usersReducerInterfaces';

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

export const socket = io('wss://safe-lowlands-48809.herokuapp.com', {
  transports: ['websocket'],
  upgrade: false,
});

export const handleAdminSubmit = (payload: payloadType) => {
  socket.emit('hostGame', payload);
};
export const handleUserSubmit = (payload: payloadType) => {
  socket.emit('joinGame', payload);
};

export const handleVotingSubmit = (candidate: Player, nominant: Player) => {
  socket.emit('voteKick', candidate, nominant);
};
