import React from 'react';
import { initialMessageState } from '../reducers/message';
import { MessageActions, MessageStateType } from '../reducers/message/msg.type';

export const MessageContext = React.createContext<{
  messageState: MessageStateType;
  messageDispatch: React.Dispatch<MessageActions>;
}>({
  messageState: initialMessageState,
  messageDispatch: () => null,
});
