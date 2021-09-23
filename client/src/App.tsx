import React, { useReducer, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useAppStyles } from './App.styled';
import { ChatBlock } from './components/Chat';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LobbyPage } from './Pages/Lobby';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';
import {
  initialMessageState,
  msgReducer,
} from './reducers/message/msg.reducer';
import { MessageActions, MessageStateType } from './reducers/message/msg.type';
import { AppState, initialState, usersReducer } from './reducers/usersReducer';
import {
  SettingsState,
  initialSetsState,
  settingsReducer,
} from './reducers/settings';
import { UsersActions } from './reducers/usersReducerInterfaces';
import { SettingsActions } from './reducers/settings';

export const AppContext = React.createContext<{
  appState: AppState;
  dispatch: React.Dispatch<UsersActions>;
}>({
  appState: initialState,
  dispatch: () => null,
});

export const MessageContext = React.createContext<{
  messageState: MessageStateType;
  messageDispatch: React.Dispatch<MessageActions>;
}>({
  messageState: initialMessageState,
  messageDispatch: () => null,
});

export const SettingsContext = React.createContext<{
  settingsState: SettingsState;
  settingsDispatch: React.Dispatch<SettingsActions>;
}>({
  settingsState: initialSetsState,
  settingsDispatch: () => null,
});

export const App: React.FC = () => {
  const classes = useAppStyles();
  const [appState, dispatch] = useReducer(usersReducer, initialState);
  const [messageState, messageDispatch] = useReducer(
    msgReducer,
    initialMessageState
  );
  const [settingsState, settingsDispatch] = useReducer(
    settingsReducer,
    initialSetsState
  );
  const [isOpenChat, setIsOpenChat] = useState(false);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <MessageContext.Provider value={{ messageState, messageDispatch }}>
        <SettingsContext.Provider value={{ settingsState, settingsDispatch }}>
          <Router>
            <Header
              isOpenChat={isOpenChat}
              setIsOpenChat={setIsOpenChat}
              isAuth={appState.isAuth}
            />
            <div className={classes.container}>
              <Switch>
                <Route exact path="/">
                  {appState.isAuth ? (
                    <Redirect to="/lobby" />
                  ) : (
                    <WelcomeBlock />
                  )}
                </Route>
                <Route exact path="/lobby">
                  <LobbyPage link={appState.currentPlayer.roomId} />
                </Route>
              </Switch>
              <ChatBlock isOpenChat={isOpenChat} />
            </div>
            <Footer />
          </Router>
        </SettingsContext.Provider>
      </MessageContext.Provider>
    </AppContext.Provider>
  );
};
