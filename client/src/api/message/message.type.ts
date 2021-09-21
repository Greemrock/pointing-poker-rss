import { payloadMessage } from './message.request';
import { socket } from '../playersRequests';

export const handleMessageSubmit = (payload: payloadMessage): void => {
  socket.emit('msgToServer', payload);
};
