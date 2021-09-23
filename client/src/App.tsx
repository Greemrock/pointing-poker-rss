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
import { MeetingRoomPage } from './Pages/MeetingRoom';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';
import {
  initialMessageState,
  msgReducer,
} from './reducers/message/msg.reducer';
import { MessageActions, MessageStateType } from './reducers/message/msg.type';
import { AppState, initialState, usersReducer } from './reducers/usersReducer';
import { UsersActions } from './reducers/usersReducerInterfaces';

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

export const App: React.FC = () => {
  const classes = useAppStyles();
  const [appState, dispatch] = useReducer(usersReducer, initialState);
  const [messageState, messageDispatch] = useReducer(
    msgReducer,
    initialMessageState
  );
  const [isOpenChat, setIsOpenChat] = useState(false);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <MessageContext.Provider value={{ messageState, messageDispatch }}>
        <Router>
          <Header
            isOpenChat={isOpenChat}
            setIsOpenChat={setIsOpenChat}
            isAuth={appState.isAuth}
          />
          <div className={classes.container}>
            <Switch>
              <Route exact path="/">
                {appState.isAuth ? <Redirect to="/lobby" /> : <WelcomeBlock />}
              </Route>
              <Route exact path="/lobby">
                <LobbyPage link={appState.currentPlayer.roomId} />
              </Route>
              <Route exact path="/game">
                <MeetingRoomPage />
              </Route>
            </Switch>
            <ChatBlock isOpenChat={isOpenChat} />
          </div>
          <Footer />
        </Router>
      </MessageContext.Provider>
    </AppContext.Provider>
  );
};
