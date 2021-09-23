import { payloadSettings } from './settings.type';
import { socket } from '../playersRequests';

export const handleSettingsSubmit = (payload: payloadSettings): void => {
  socket.emit('addSettings', payload);
};
