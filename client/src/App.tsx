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
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <Router>
        <Header />
        <div className={classes.container}>
          <Switch>
            <Route exact path="/">
              {appState.isAuth ? <Redirect to="/lobby" /> : <WelcomeBlock />}
            </Route>
            <Route exact path="/lobby">
              <LobbyPage
                link={appState.players[0]?.roomId || ''}
                isAdmin={appState.players[0]?.isAdmin || false}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
};
