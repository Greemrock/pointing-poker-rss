import { FC } from 'react';
import './App.css';
import { Member } from './components/Member/Member';
import Img from './components/assets/img/blane.png';

export const App: FC = () => {
  return (
    <Member
      firstName={'David'}
      lastName={'Blane'}
      jobPosition={'street magic'}
      image={Img}
      isYou={false}
    />
  );
};
