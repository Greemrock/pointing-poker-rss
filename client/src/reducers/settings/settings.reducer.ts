import { Decks } from '../../Shared/enums';
import { SettingsActions, SetsActionsTypes } from './settings.type';

import { Sets } from './settings.type';

export type SettingsState = {
  currentSets: Sets;
};

export const initialSetsState: SettingsState = {
  currentSets: {
    minutes: 1,
    seconds: 0,
    deck: Decks.tshirts,
    isTimerNeeded: true,
    roomId: '',
  },
};
export const settingsReducer = (
  state: SettingsState = initialSetsState,
  action: SettingsActions
): SettingsState => {
  switch (action.type) {
    case SetsActionsTypes.ADD_SETS:
      return {
        ...state,
        currentSets: action.payload,
      };
    case SetsActionsTypes.SET_TIMER:
      return {
        ...state,
        currentSets: {
          ...state.currentSets,
          isTimerNeeded: !state.currentSets.isTimerNeeded,
        },
      };
    case SetsActionsTypes.SET_MINUTES:
      return {
        ...state,
        currentSets: {
          ...state.currentSets,
          minutes: action.payload,
        },
      };
    case SetsActionsTypes.SET_SECONDS:
      return {
        ...state,
        currentSets: {
          ...state.currentSets,
          seconds: action.payload,
        },
      };
    case SetsActionsTypes.SET_DECK:
      return {
        ...state,
        currentSets: {
          ...state.currentSets,
          deck: action.payload,
        },
      };
    case SetsActionsTypes.SET_ROOMID:
      return {
        ...state,
        currentSets: {
          ...state.currentSets,
          roomId: action.payload,
        },
      };
    default:
      return state;
  }
};
