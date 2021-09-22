import { MessageActionType } from './msg.action';
import { MessageActions, MessageStateType } from './msg.type';

export const initialMessageState: MessageStateType = {
  message: [],
};

export const msgReducer = (
  state: MessageStateType = initialMessageState,
  action: MessageActions
): MessageStateType => {
  switch (action.type) {
    case MessageActionType.ADD_MESSAGE:
      return {
        ...state,
        message: [...state.message, action.payload],
      };
    default:
      return state;
  }
};
