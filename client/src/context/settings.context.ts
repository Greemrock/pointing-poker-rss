import React from 'react';
import { initialSetsState } from '../reducers/settings';
import { SettingsActions, SettingsState } from '../reducers/settings';

export const SettingsContext = React.createContext<{
  settingsState: SettingsState;
  settingsDispatch: React.Dispatch<SettingsActions>;
}>({
  settingsState: initialSetsState,
  settingsDispatch: () => null,
});
