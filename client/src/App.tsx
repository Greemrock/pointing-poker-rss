<<<<<<< HEAD
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
=======
import React, { useReducer } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
>>>>>>> 08c01c26fb598bd09226f9c1389c72c372315b69
import { useAppStyles } from './App.styled';
import { ChatBlock } from './components/Chat';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LobbyPage } from './Pages/Lobby';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';
import { AppState, initialState, usersReducer } from './reducers/usersReducer';
import { UsersActions } from './reducers/usersReducerInterfaces';

<<<<<<< HEAD
const store: PlayerCard[] = [
  { id: '0', name: 'Andrei', surname: 'A', job: 'developer' },
  { id: '1', name: 'Sergey', surname: 'S', job: 'developer' },
  { id: '2', name: 'Arnem', surname: 'A', job: 'developer' },
];

export const App: React.FC = () => {
  const classes = useAppStyles();
  const [isOpenChat, setIsOpenChat] = useState(false);
  return (
    <Router>
      <Header isOpenChat={isOpenChat} setIsOpenChat={setIsOpenChat} />
      <div className={classes.container}>
        <Switch>
          <Route exact path="/" component={WelcomeBlock} />
          <Route exact path="/lobby">
            <LobbyPage
              link="./link"
              isAdmin={true}
              playerId={'0'}
              playersCards={store}
            />
          </Route>
        </Switch>
        <ChatBlock isOpenChat={isOpenChat} />
      </div>
      <Footer />
    </Router>
=======
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
                link={appState.players[0].roomId}
                isAdmin={appState.players[0].isAdmin}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </AppContext.Provider>
>>>>>>> 08c01c26fb598bd09226f9c1389c72c372315b69
  );
};
