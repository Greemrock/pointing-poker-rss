import React, { useReducer } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useAppStyles } from './App.styled';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LobbyPage } from './Pages/Lobby';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';
import { AppState, initialState, usersReducer } from './reducers/usersReducer';
import { UsersActions } from './reducers/usersReducerInterfaces';
import { IssueContext } from './reducers/issue/issue.context';
import {
  initialIssueState,
  issueReducer,
} from './reducers/issue/issue.reducer';

export const AppContext = React.createContext<{
  appState: AppState;
  dispatch: React.Dispatch<UsersActions>;
}>({
  appState: initialState,
  dispatch: () => null,
});

export const App: React.FC = () => {
  const classes = useAppStyles();
  const [appState, dispatch] = useReducer(usersReducer, initialState);
  const [issueState, issueDispatch] = useReducer(
    issueReducer,
    initialIssueState
  );

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <IssueContext.Provider value={{ issueState, issueDispatch }}>
        <Router>
          <Header />
          <div className={classes.container}>
            <Switch>
              <Route exact path="/">
                {appState.isAuth ? <Redirect to="/lobby" /> : <WelcomeBlock />}
              </Route>
              <Route exact path="/lobby">
                <LobbyPage link={appState.currentPlayer.roomId} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </IssueContext.Provider>
    </AppContext.Provider>
  );
};
