import { payloadMessage } from './message.type';
import { socket } from '../playersRequests';

export const handleMessageSubmit = (payload: payloadMessage): void => {
  socket.emit('msgToServer', payload);
};
