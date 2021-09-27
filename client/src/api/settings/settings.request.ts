import { Sets } from '../../reducers/settings';
import { socket } from '../playersRequests';

export const handleSendSettings = (payload: Sets): void => {
  socket.emit('sendSettings', payload);
};
