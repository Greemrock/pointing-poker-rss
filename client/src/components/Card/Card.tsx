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
import { IssueContext, SettingsContext } from '../../context';
import { Decks } from '../../Shared';

type Props = {
  isCardSelected: boolean;
  setCardSelected: (isSelect: boolean) => void;
  nameCard: string;
  cardArray: string[];
};

export const Card: React.FC<Props> = ({
  nameCard,
  isCardSelected,
  setCardSelected,
  cardArray,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const classes = useCardStyles({ isOpen, isSelect, isCardSelected });

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
    if (!isCardSelected) {
      setIsOpen(false);
      setIsSelect(false);
    }
  }, [isCardSelected]);

  const handleClickCard = () => {
    if (isCardSelected) {
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
    setCardSelected(true);
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
