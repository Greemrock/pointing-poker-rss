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
import { MessageContext, IssueContext, AppContext } from './context';
import { LobbyPage } from './Pages/Lobby';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';
import { initialIssueState, issueReducer } from './reducers/issue';
import { initialMessageState, msgReducer } from './reducers/message';
import { initialState, usersReducer } from './reducers/users/users.reducer';

export const App: React.FC = () => {
  const classes = useAppStyles();
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [appState, dispatch] = useReducer(usersReducer, initialState);
  const [issueState, issueDispatch] = useReducer(
    issueReducer,
    initialIssueState
  );
  const [messageState, messageDispatch] = useReducer(
    msgReducer,
    initialMessageState
  );
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <MessageContext.Provider value={{ messageState, messageDispatch }}>
        <IssueContext.Provider value={{ issueState, issueDispatch }}>
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
        </IssueContext.Provider>
      </MessageContext.Provider>
    </AppContext.Provider>
  );
};
