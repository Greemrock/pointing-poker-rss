import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerContainer } from '../../components/PlayerContainer';
import { StartExitBtn } from '../../components/StartExitBtn';
import { Issue, Place } from '../../Shared/enums';
import { useLobbyPageStyles } from './LobbyPage.styled';
import { AppContext } from '../../App';
import { IssueContainer } from '../../components/Issue/IssueContainer';
import { IssueContext } from '../../reducers/issue/issue.context';

type Props = {
  link: string;
  isAdmin: boolean;
  view?: Place;
};

export const LobbyPage: React.FC<Props> = ({ link, isAdmin, view }) => {
  const classes = useLobbyPageStyles();
  const { appState, dispatch } = useContext(AppContext);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.nameGame}>
        <Typography variant="h6" align="center">
          Meeting room
        </Typography>
      </div>
      <StartExitBtn link={link} isAdmin={isAdmin} />
      <PlayerContainer
        playerId={appState.currentPlayer?.id}
        view={view}
        playersCards={appState.players}
        isAdmin={isAdmin}
        dispatch={dispatch}
      />
      {appState.currentPlayer?.isAdmin && (
        <IssueContainer view={Issue.update} />
      )}
    </Container>
  );
};
