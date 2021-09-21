import React, { useEffect, useReducer, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { PlayerCard } from '../PlayerCard';
import { usePlayerContainerStyles } from '../PlayerContainer/PlayerContainer.styled';
import { Place, SizeCard } from '../../Shared/enums';
import { Player, UsersActions } from '../../reducers/usersReducerInterfaces';
import { DeletePlayerBlock } from '../DeletePlayerBlock';
import { initialState, VoutingReducer } from '../../reducers/voutingReducer';
import { StartVoutingActionCreator } from '../../reducers/voutingActionCreators';
import { CandidateOrNominated } from '../../reducers/voutingReducerInterfaces';
import { socket } from '../../api/playersRequests';
import { ReloadUsersActionCreator } from '../../reducers/usersActionCreators';

type Props = {
  playersCards: PlayerCard[];
  view?: Place;
  currentPlayer: Player;
  dispatch: React.Dispatch<UsersActions>;
};

export const PlayerContainer: React.FC<Props> = ({
  view,
  playersCards,
  currentPlayer,
  dispatch,
}) => {
  const [isOpenKickMenu, setIsOpenKickMenu] = useState(false);
  const [snitch, setSnitch] = useState<string | null>(null);
  const [rogue, setRogue] = useState<CandidateOrNominated | undefined>();
  const [vouteState, dispatchVouting] = useReducer(
    VoutingReducer,
    initialState
  );
  const classes = usePlayerContainerStyles();

  const startVoting = (
    candidate: CandidateOrNominated | null,
    nominated: CandidateOrNominated | null
  ) => {
    console.log('to back', candidate, nominated);
    dispatchVouting(StartVoutingActionCreator());
  };
  useEffect(() => {
    setSnitch(`${currentPlayer.name}${currentPlayer.surname}`);
  }, [currentPlayer.name, currentPlayer.surname]);
  const closeKickMenu = () => {
    setIsOpenKickMenu(false);
  };
  const openKickMenu = (rogue?: CandidateOrNominated) => {
    setRogue(rogue);
    setIsOpenKickMenu(true);
  };
  socket.on('roomInfo', (roomInfo) => {
    dispatch(ReloadUsersActionCreator(roomInfo.users));
  });

  return (
    <div className={classes.root}>
      {!view ? (
        <Typography variant="h6" align="center" className={classes.title}>
          Members:
        </Typography>
      ) : null}
      <Container className={classes.container} maxWidth="md">
        {playersCards.map(({ id, job, name, surname, image, isAdmin }) => {
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
                  openKickMenu({ id, name: `${name} ${surname}` });
                }
              }}
              isDisabled={vouteState.voutingStarted}
            />
          );
        })}
      </Container>
      <DeletePlayerBlock
        isAdmin={currentPlayer.isAdmin}
        isVoting={
          vouteState.nominated.id !== currentPlayer.id &&
          vouteState.voutingStarted
        }
        rogue={rogue}
        snitch={snitch}
        isOpen={isOpenKickMenu}
        closeMenu={closeKickMenu}
        startVoting={() => {
          if (rogue) {
            startVoting(
              {
                id: currentPlayer.id,
                name: `${currentPlayer.name} ${currentPlayer.surname}`,
              },
              { id: rogue.id, name: rogue.name }
            );
          }
        }}
      />
    </div>
  );
};
