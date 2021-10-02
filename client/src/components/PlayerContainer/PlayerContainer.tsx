import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';
import { Place, SizeCard } from '../../Shared/enums';
import { Player } from '../../reducers/users/';
import { DeletePlayerBlock } from '../DeletePlayerBlock';
import { initialState, VoteReducer } from '../../reducers/vote/';
import {
  FinishVoutingActionCreator,
  SetCandidateActionCreator,
  SetNominatedActionCreator,
  SetVoteIdActionCreator,
  StartVoutingActionCreator,
} from '../../reducers/vote/';
import { handleVotingSubmit, socket } from '../../api/playersRequests';
import {
  AuthActionCreator,
  ReloadUsersActionCreator,
} from '../../reducers/users/';
import { UsersContext } from '../../context/';

type Props = {
  view?: Place;
};

export const PlayerContainer: React.FC<Props> = ({ view }) => {
  const {
    appState: { currentPlayer, players },
    dispatch,
  } = useContext(UsersContext);
  const [isOpenKickMenu, setIsOpenKickMenu] = useState(false);
  const [rogue, setRogue] = useState<Player | undefined>();
  const [voteState, dispatchVoting] = useReducer(VoteReducer, initialState);
  const classes = usePlayerContainerStyles();

  const startVoting = (candidate: Player, nominated: Player) => {
    handleVotingSubmit(candidate, nominated);
  };

  useEffect(() => {
    socket.off('voteStarted');
    socket.on(
      'voteStarted',
      (isStarted: boolean, nominated, candidate, voteId: string) => {
        if (isStarted) {
          dispatchVoting(SetCandidateActionCreator(candidate));
          dispatchVoting(SetNominatedActionCreator(nominated));
          dispatchVoting(SetVoteIdActionCreator(voteId));
          dispatchVoting(StartVoutingActionCreator());
          if (currentPlayer.id !== '' && currentPlayer.id !== nominated.id) {
            setIsOpenKickMenu(true);
          }
        }
      }
    );
  });

  useEffect(() => {
    socket.off('voteEnd');
    socket.on('voteEnd', (isVoteEnd: boolean, results, isDeleted: string) => {
      dispatchVoting(FinishVoutingActionCreator());
      setIsOpenKickMenu(false);
      if (isDeleted === 'DELETED') {
        if (currentPlayer.id === voteState.candidate.id)
          dispatch(AuthActionCreator(false));
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
      <Typography variant="h6" align="center" className={classes.title}>
        Members:
      </Typography>
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
                isDisabled={voteState.votingStarted}
              />
            );
          }
        )}
      </Container>
      <DeletePlayerBlock
        isVoting={voteState.votingStarted}
        votingCandidate={voteState.candidate}
        votingNominated={voteState.nominated}
        allPlayersNumber={players.length}
        roomId={currentPlayer.roomId}
        voteId={voteState.voteId}
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
