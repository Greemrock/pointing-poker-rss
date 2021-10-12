import { socket } from '../playersRequests';
import {
  payloadCardChoice,
  payloadStartEndRound,
  payloadUserVoteResult,
} from './game.type';

export const handleStartTimerSubmit = (payload: payloadStartEndRound): void => {
  socket.emit('startTimer', payload);
};

export const handleResetTimerSubmit = (payload: string): void => {
  socket.emit('resetTimer', payload);
};

export const handleAddResultSubmit = (payload: payloadCardChoice): void => {
  socket.emit('addOverallResult', payload);
};

export const handleEndGameSubmit = (payload: string): void => {
  socket.emit('endGame', payload);
};

export const handleMyCardChoiceSubmit = (
  payload: payloadUserVoteResult
): void => {
  socket.emit('userVote', payload);
};

export const handleEndRoundSubmit = (payload: payloadStartEndRound): void => {
  socket.emit('roundEnd', payload);
};

export const handleLeaveRoom = (payload: string): void => {
  socket.emit('leaveRoom', payload);
};
