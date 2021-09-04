import { FC } from 'react';
import './App.css';
import { PlayerCard } from './components/PlayerCard/';
import Avatar from './assets/img/qwe.png';

export const App: FC = () => {
  return (
    <PlayerCard
      id={1}
      name={'David'}
      surname={'Blane Blane'}
      position={'street magic'}
      image={Avatar}
    />
  );
};
