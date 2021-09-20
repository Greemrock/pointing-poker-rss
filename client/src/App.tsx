import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAppStyles } from './App.styled';
import { ChatBlock } from './components/Chat';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LobbyPage } from './Pages/Lobby';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';

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
  );
};
