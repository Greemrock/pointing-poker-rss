import {
  payloadBaseIssue,
  payloadDeleteIssue,
  payloadIssue,
  payloadIssueId,
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

export const handleGetIssueSubmit = (payload: string): void => {
  socket.emit('getIssues', payload);
};

export const handleSendCurrentIssueIdSubmit = (
  payload: payloadIssueId
): void => {
  socket.emit('sendCurrentId', payload);
};
