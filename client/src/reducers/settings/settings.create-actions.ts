import { Decks } from '../../Shared';
import {
  Sets,
  setTimerAction,
  setMinutesAction,
  setSecondsAction,
  setDeckAction,
  setRoomIdAction,
  SetsActionsTypes,
  ReloadSetsAction,
} from './settings.type';

export const ReloadSetsActionCreator = (payload: Sets): ReloadSetsAction => ({
  type: SetsActionsTypes.ADD_SETS,
  payload,
});

export const SetTimerActionCreator = (): setTimerAction => ({
  type: SetsActionsTypes.SET_TIMER,
});

export const SetMinutesActionCreator = (payload: number): setMinutesAction => ({
  type: SetsActionsTypes.SET_MINUTES,
  payload,
});

export const SetSecondsActionCreator = (payload: number): setSecondsAction => ({
  type: SetsActionsTypes.SET_SECONDS,
  payload,
});

export const SetDeckActionCreator = (payload: Decks): setDeckAction => ({
  type: SetsActionsTypes.SET_DECK,
  payload,
});

export const SetRoomIdActionCreator = (payload: string): setRoomIdAction => ({
  type: SetsActionsTypes.SET_ROOMID,
  payload,
});
