import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  ClickAwayListener,
  Paper,
  Typography,
} from '@material-ui/core';
import { useCardStyles } from './Card.styles';
import { QuestionIconComponent } from './QuestionIconComponent';
import { CoffeIconComponent } from './CoffeIconComponent';
import {
  handleAddResultSubmit,
  handleMyCardChoiceSubmit,
} from '../../api/game';
import { UsersContext } from '../../context/users.context';
import { IssueContext, ScoreContext, SettingsContext } from '../../context';
import { IsSelectedCardActionCreator } from '../../reducers/score';

type Props = {
  nameCard: string;
  cardArray: string[];
};

export const Card: React.FC<Props> = ({ nameCard, cardArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  const {
    scoreState: { isSelectedCard },
    scoreDispatch,
  } = useContext(ScoreContext);

  const classes = useCardStyles({ isOpen, isSelect, isSelectedCard });

  const {
    appState: {
      currentPlayer: { roomId, id },
    },
  } = useContext(UsersContext);
  const {
    issueState: { currentId },
  } = useContext(IssueContext);

  const {
    settingsState: {
      currentSets: { deck },
    },
  } = useContext(SettingsContext);

  useEffect(() => {
    if (!isSelectedCard) {
      setIsOpen(false);
      setIsSelect(false);
    }
  }, [isSelectedCard]);

  const handleClickCard = () => {
    if (isSelectedCard) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleSubmitYes = () => {
    setIsOpen(false);
    setIsSelect(true);
    scoreDispatch(IsSelectedCardActionCreator(true));

    const cardNumber = cardArray.findIndex((el: string) => el === nameCard)!;

    handleAddResultSubmit({
      roomId,
      issueId: currentId,
      cardNumber,
    });

    handleMyCardChoiceSubmit({
      issueId: currentId,
      userId: id,
      voteResult: nameCard,
      roomId,
      cardType: deck,
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <Button
        variant="outlined"
        className={classes.clickFild}
        onClick={handleSubmitYes}
      >
        Yes
      </Button>
      <ClickAwayListener onClickAway={handleClickOutside}>
        <Paper
          elevation={2}
          variant="outlined"
          className={classes.cardBlock}
          onClick={handleClickCard}
        >
          <Typography className={classes.topText}>{nameCard}</Typography>
          <Box className={classes.centerBlock}>
            {nameCard === '?' ? (
              <QuestionIconComponent />
            ) : nameCard === 'Pass' ? (
              <CoffeIconComponent />
            ) : (
              <Typography variant="h3">{nameCard}</Typography>
            )}
          </Box>
          <Typography className={classes.bottomText}>{nameCard}</Typography>
        </Paper>
      </ClickAwayListener>
    </div>
  );
};
