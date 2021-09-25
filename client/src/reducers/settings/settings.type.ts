import { Decks } from '../../Shared';

export enum SetsActionsTypes {
  ADD_SETS = 'ADD-SETS',
  SET_TIMER = 'SET-TIMER',
  SET_MINUTES = 'SET-MINUTES',
  SET_SECONDS = 'SET-SECONDS',
  SET_DECK = 'SET-DECK',
  SET_ROOMID = 'SET-ROOMID',
}
export type Sets = {
  minutes: number;
  seconds: number;
  deck: Decks;
  isTimerNeeded: boolean;
  roomId: string;
};

export interface setTimerAction {
  type: SetsActionsTypes.SET_TIMER;
}

export interface setMinutesAction {
  type: SetsActionsTypes.SET_MINUTES;
  payload: number;
}

export interface setSecondsAction {
  type: SetsActionsTypes.SET_SECONDS;
  payload: number;
}

export interface setDeckAction {
  type: SetsActionsTypes.SET_DECK;
  payload: Decks;
}

export interface setRoomIdAction {
  type: SetsActionsTypes.SET_ROOMID;
  payload: string;
}

export interface ReloadSetsAction {
  type: SetsActionsTypes.ADD_SETS;
  payload: Sets;
}

export type SettingsActions =
  | ReloadSetsAction
  | setTimerAction
  | setMinutesAction
  | setSecondsAction
  | setDeckAction
  | setRoomIdAction;
