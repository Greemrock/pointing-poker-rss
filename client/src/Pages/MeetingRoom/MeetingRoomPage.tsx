import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useMeetingRoomPageStyles } from './MeetingRoomPage.styled';
import { ScorePlayers } from '../../components/ScorePlayers';
import { SettingsContext } from '../../context/';
import { ChatBlock } from '../../components/Chat';
import { CardContainer } from '../../components/CardContainer';
import { VoteGraph } from '../../components/VoteGraph';

export const MeetingRoomPage: React.FC = () => {
  const classes = useMeetingRoomPageStyles();
  const {
    settingsState: { currentSets },
  } = useContext(SettingsContext);
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.nameGame}>
            <Typography variant="h6" align="center">
              Meeting room
            </Typography>
          </div>
        </div>
        <ScorePlayers />
      </Container>
      <ChatBlock />
    </>
  );
};
