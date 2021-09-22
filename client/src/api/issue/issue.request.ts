import {
  payloadBaseIssue,
  payloadDeleteIssue,
  payloadIssue,
} from './issue.type';
import { socket } from '../playersRequests';

export const handleAddIssueSubmit = (payload: payloadBaseIssue): void => {
  socket.emit('addIssue', payload);
};

export const handleUpdateIssueSubmit = (payload: payloadIssue): void => {
  socket.emit('updateIssue', payload);
};

export const handleDeleteIssueSubmit = (payload: payloadDeleteIssue): void => {
  socket.emit('deleteIssue', payload);
};
