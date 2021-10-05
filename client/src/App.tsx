import React, { useReducer } from 'react';
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
import {
  MessageContext,
  IssueContext,
  UsersContext,
  ScoreContext,
} from './context';
import { LobbyPage } from './Pages/Lobby';
import { MeetingRoomPage } from './Pages/MeetingRoom';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';
import { initialIssueState, issueReducer } from './reducers/issue';
import { initialMessageState, msgReducer } from './reducers/message';
import { initialState, usersReducer } from './reducers/users/';
import { initialSetsState, settingsReducer } from './reducers/settings';
import { SettingsContext } from './context/';
import { scoreReducer, initialScoreState } from './reducers/score';
import { ResultPage } from './Pages/ResultPage';

export const App: React.FC = () => {
  const classes = useAppStyles();
  const [appState, dispatch] = useReducer(usersReducer, initialState);
  const [issueState, issueDispatch] = useReducer(
    issueReducer,
    initialIssueState
  );
  const [messageState, messageDispatch] = useReducer(
    msgReducer,
    initialMessageState
  );
  const [settingsState, settingsDispatch] = useReducer(
    settingsReducer,
    initialSetsState
  );
  const [scoreState, scoreDispatch] = useReducer(
    scoreReducer,
    initialScoreState
  );
  return (
    <UsersContext.Provider value={{ appState, dispatch }}>
      <MessageContext.Provider value={{ messageState, messageDispatch }}>
        <IssueContext.Provider value={{ issueState, issueDispatch }}>
          <SettingsContext.Provider value={{ settingsState, settingsDispatch }}>
            <ScoreContext.Provider value={{ scoreState, scoreDispatch }}>
              <Router>
                {!appState.isAuth && <Redirect to="/" />}
                <Header />
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

                    <Route exact path="/game">
                      <MeetingRoomPage />
                    </Route>
                    <Route exact path="/result">
                      <ResultPage />
                    </Route>
                  </Switch>
                  <ChatBlock />
                </div>
                <Footer />
              </Router>
            </ScoreContext.Provider>
          </SettingsContext.Provider>
        </IssueContext.Provider>
      </MessageContext.Provider>
    </UsersContext.Provider>
  );
};
