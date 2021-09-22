import React from 'react';
import { initialMessageState } from '.';
import { MessageActions, MessageStateType } from './msg.type';

export const MessageContext = React.createContext<{
  messageState: MessageStateType;
  messageDispatch: React.Dispatch<MessageActions>;
}>({
  messageState: initialMessageState,
  messageDispatch: () => null,
});
