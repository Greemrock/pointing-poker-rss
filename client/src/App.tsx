import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { io, Socket } from 'socket.io-client';
import { useAppStyles } from './App.styled';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LobbyPage } from './Pages/Lobby';
import { WelcomeBlock } from './Pages/Welcome/WelcomeBlock';

const store: PlayerCard[] = [
  { id: 0, name: 'Andrei', surname: 'A', job: 'developer' },
  { id: 1, name: 'Sergey', surname: 'S', job: 'developer' },
  { id: 2, name: 'Arnem', surname: 'A', job: 'developer' },
];

export const App: React.FC = () => {
  const classes = useAppStyles();
  // const [socket, setSocket] = useState<Socket | null>(null);

  // useEffect(() => {
  // const socketIo = io('ws://safe-lowlands-48809.herokuapp.com', {
  //   transports: ['websocket'],
  //   upgrade: false,
  // });
  //   setSocket(socketIo);
  // }, []);

  return (
    <Router>
      <Header />
      <div className={classes.container}>
        <Switch>
          <Route exact path="/">
            <WelcomeBlock />
          </Route>
          <Route exact path="/lobby">
            <LobbyPage
              link="./link"
              isAdmin={true}
              playerId={0}
              playersCards={store}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
