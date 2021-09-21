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

type Props = {
  playersCards: PlayerCard[];
  view?: Place;
  playerId: string | undefined;
  you: Player;
  dispatch: React.Dispatch<UsersActions>;
};

export const PlayerContainer: React.FC<Props> = ({
  view,
  playersCards,
  playerId,
  you,
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
    setSnitch(`${you.name}${you.surname}`);
  }, [you.name, you.surname]);
  const closeKickMenu = () => {
    setIsOpenKickMenu(false);
  };
  const openKickMenu = (rogue?: CandidateOrNominated) => {
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
        {playersCards.map(({ id, job, name, surname, image, isAdmin }) => {
          return (
            <PlayerCard
              key={id}
              id={id}
              job={job}
              name={name}
              surname={surname}
              image={image}
              playerId={playerId}
              isAdmin={isAdmin}
              size={view === Place.game ? SizeCard.small : undefined}
              removeUser={() => {
                if (isAdmin) {
                  openKickMenu();
                } else {
                  openKickMenu({ id, name: `${name} ${surname}` });
                }
              }}
            />
          );
        })}
      </Container>
      <DeletePlayerBlock
        isAdmin={you?.isAdmin}
        isVoting={
          vouteState.nominated.id !== you.id && vouteState.voutingStarted
        }
        rogue={rogue}
        snitch={snitch}
        isOpen={isOpenKickMenu}
        closeMenu={closeKickMenu}
        startVoting={() => {
          if (rogue) {
            startVoting(
              { id: you?.id, name: `${you.name} ${you?.surname}` },
              { id: rogue.id, name: rogue.name }
            );
          }
        }}
      />
    </div>
  );
};
