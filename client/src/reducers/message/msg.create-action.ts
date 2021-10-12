import { AddMessageAction, MessageActionType, MessageType } from './msg.type';

export const AddMessageActionCreator = (
  payload: MessageType
): AddMessageAction => ({
  type: MessageActionType.ADD_MESSAGE,
  payload,
});
