import { MessageActionType } from './msg.action';

export type MessageType = {
  id: string;
  name: string;
  surname: string;
  image: string | null;
  roomId: string;
  message: string;
  timestamp: string;
};

export type MessageStateType = {
  message: MessageType[];
};

export type AddMessageAction = {
  type: MessageActionType.ADD_MESSAGE;
  payload: MessageType;
};

export type MessageActions = AddMessageAction;
