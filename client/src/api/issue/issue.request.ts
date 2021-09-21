import { payloadIssue } from './issue.type';
import { socket } from '../playersRequests';

export const handleIssueSubmit = (payload: payloadIssue): void => {
  socket.emit('addIssue', payload);
};
