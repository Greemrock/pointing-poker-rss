import { FC } from 'react';
import './App.css';
import { StartExitBtn } from './components/StartExitBtn/StartExitBtn';

export const App: FC = () => {
  return <StartExitBtn isAdmin={true} />;
};
