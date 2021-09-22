import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';
import { Place, SizeCard } from '../../Shared/enums';
import { Player } from '../../reducers/usersReducerInterfaces';
import { DeletePlayerBlock } from '../DeletePlayerBlock';
import { initialState, VoutingReducer } from '../../reducers/voutingReducer';
import {
  SetCandidateActionCreator,
  SetNominatedActionCreator,
  StartVoutingActionCreator,
} from '../../reducers/voutingActionCreators';
import { handleVotingSubmit, socket } from '../../api/playersRequests';
import { ReloadUsersActionCreator } from '../../reducers/usersActionCreators';
import { AppContext } from '../../App';

type Props = {
  view?: Place;
};

export const PlayerContainer: React.FC<Props> = ({ view }) => {
  const {
    appState: { currentPlayer, players },
    dispatch,
  } = useContext(AppContext);
  const [isOpenKickMenu, setIsOpenKickMenu] = useState(false);
  const [rogue, setRogue] = useState<Player | undefined>();
  const [vouteState, dispatchVouting] = useReducer(
    VoutingReducer,
    initialState
  );
  const classes = usePlayerContainerStyles();

  const startVoting = (candidate: Player, nominated: Player) => {
    handleVotingSubmit(candidate, nominated);
  };
  useEffect(() => {
    socket.off('voteStarted');
    socket.on('voteStarted', (isStarted, nominated, candidate) => {
      if (isStarted) {
        dispatchVouting(SetCandidateActionCreator(candidate));
        dispatchVouting(SetNominatedActionCreator(nominated));
        dispatchVouting(StartVoutingActionCreator());
        if (currentPlayer.id !== '' && currentPlayer.id !== nominated.id) {
          setIsOpenKickMenu(true);
        }
      }
    });
  });
  useEffect(() => {
    socket.off('roomInfo');
    socket.on('roomInfo', (roomInfo) => {
      dispatch(ReloadUsersActionCreator(roomInfo.users));
    });
  }, []);
  const closeKickMenu = () => {
    setIsOpenKickMenu(false);
  };
  const openKickMenu = (rogue?: Player) => {
    setRogue(rogue);
    setIsOpenKickMenu(true);
  };

  return (
    <div className={classes.root}>
      {!view ? (
        <Typography variant="h6" align="center" className={classes.title}>
          Members:
        </Typography>
      ) : null}
      <Container className={classes.container} maxWidth="md">
        {players.map(
          ({ id, job, name, surname, image, isAdmin, observer, roomId }) => {
            return (
              <PlayerCard
                key={id}
                id={id}
                job={job}
                name={name}
                surname={surname}
                image={image}
                playerId={currentPlayer.id}
                isAdmin={isAdmin}
                size={view === Place.game ? SizeCard.small : undefined}
                removeUser={() => {
                  if (isAdmin) {
                    openKickMenu();
                  } else {
                    openKickMenu({
                      id,
                      name,
                      surname,
                      job,
                      image,
                      isAdmin,
                      observer,
                      roomId,
                    });
                  }
                }}
                isDisabled={vouteState.voutingStarted}
              />
            );
          }
        )}
      </Container>
      <DeletePlayerBlock
        isVoting={vouteState.voutingStarted}
        votingCandidate={vouteState.candidate}
        votingNominated={vouteState.nominated}
        rogue={rogue}
        isOpen={isOpenKickMenu}
        closeMenu={closeKickMenu}
        startVoting={() => {
          if (rogue) {
            startVoting(currentPlayer, rogue);
          }
        }}
      />
    </div>
  );
};
