import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Container, Typography } from '@material-ui/core';
import { useMeetingRoomPageStyles } from './MeetingRoomPage.styled';
import { SettingsContext, UsersContext } from '../../context/';
import { CardContainer } from '../../components/CardContainer';
import { VoteGraph } from '../../components/VoteGraph';

export const MeetingRoomPage: React.FC = () => {
  const classes = useMeetingRoomPageStyles();
  const {
    appState: { isAuth },
  } = useContext(UsersContext);
  const {
    settingsState: { currentSets },
  } = useContext(SettingsContext);
  return (
    <>
      {!isAuth && <Redirect to="/" />}
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.nameGame}>
          <Typography variant="h6" align="center">
            Meeting room
          </Typography>
        </div>
      </Container>
    </>
  );
};
