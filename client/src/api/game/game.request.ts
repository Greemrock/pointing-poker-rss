import { socket } from '../playersRequests';
import { payloadCardChoice } from './game.type';

export const handleStartTimerSubmit = (payload: string): void => {
  socket.emit('startTimer', payload);
};

export const handleResetTimerSubmit = (payload: string): void => {
  socket.emit('resetTimer', payload);
};

export const handleCardChoiceSubmit = (payload: payloadCardChoice): void => {
  socket.emit('addOverallResult', payload);
};
