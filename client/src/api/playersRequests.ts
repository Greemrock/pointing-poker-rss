import { io } from 'socket.io-client';
import { Player } from '../reducers/users/users.type';

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

export const handleVotingSubmit = (candidate: Player, nominant: Player) => {
  socket.emit('voteKick', candidate, nominant);
};
export const handleVotingYesSubmit = (
  voteKickId: string,
  userQuantity: number,
  roomId: string
) => {
  socket.emit('voteYes', { voteKickId, userQuantity, roomId });
};
export const handleVotingNoSubmit = (
  voteKickId: string,
  userQuantity: number,
  roomId: string
) => {
  socket.emit('voteNo', { voteKickId, userQuantity, roomId });
};
