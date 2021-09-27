import React from 'react';
import {
  Typography,
  Dialog,
  DialogActions,
  Button,
  Container,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useStyles } from './DeletePlayerBlock.styles';
import { Player } from '../../reducers/users/users.type';
import {
  handleVotingNoSubmit,
  handleVotingYesSubmit,
} from '../../api/playersRequests';

type Props = {
  isVoting: boolean | undefined;
  rogue?: Player;
  votingCandidate: Player;
  votingNominated: Player;
  isOpen: boolean;
  allPlayersNumber: number;
  roomId: string;
  voteId: string;
  closeMenu: () => void;
  startVoting: () => void;
};

export const DeletePlayerBlock: React.FC<Props> = ({
  isVoting,
  rogue,
  votingCandidate,
  votingNominated,
  isOpen,
  allPlayersNumber,
  roomId,
  voteId,
  closeMenu,
  startVoting,
}) => {
  const classes = useStyles();

  const handleCloseDialog = () => {
    !isVoting
      ? closeMenu()
      : (() => {
          closeMenu();
          handleVotingNoSubmit(
            voteId,
            allPlayersNumber,
            roomId,
            votingCandidate.id
          );
        })();
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      closeMenu();
      !isVoting
        ? startVoting()
        : handleVotingYesSubmit(
            voteId,
            allPlayersNumber,
            roomId,
            votingCandidate.id
          );
    },
  });

  return (
    <Dialog
      open={isOpen}
      onClose={(e, reason) => {
        if (reason !== 'backdropClick') {
          closeMenu();
        }
      }}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
    >
      <Container className={classes.boxBlock}>
        <Typography className={classes.heding} component="h4" variant="h4">
          Kick
        </Typography>
        {!isVoting ? (
          <Typography className={classes.textBlock} component="h6" variant="h6">
            Are you really want to remove player{' '}
            <span className={classes.nameSpan}> {rogue?.name} </span>from game
            session?
          </Typography>
        ) : (
          <Typography className={classes.textBlock} component="h6" variant="h6">
            <span className={classes.nameSpan}>
              {' '}
              {`${votingNominated.name} ${votingNominated.surname}`}{' '}
            </span>{' '}
            want to kick member{' '}
            <span className={classes.nameSpan}>
              {' '}
              {`${votingCandidate.name} ${votingCandidate.surname}`}
            </span>
            . Do you agree with it?
          </Typography>
        )}
      </Container>
      <form action="" autoComplete="off" onSubmit={formik.handleSubmit}>
        <DialogActions className={classes.buttonsBlock}>
          <Button
            onClick={(e) => {
              const button = e.target as HTMLButtonElement;
              button.disabled = true;
            }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Yes
          </Button>
          <Button
            onClick={handleCloseDialog}
            color="secondary"
            variant="contained"
          >
            No
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
