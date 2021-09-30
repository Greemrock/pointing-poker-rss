import React, { useEffect, useState } from 'react';
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

type Props = {
  isCardSelected: boolean;
  setCardSelected: (isSelect: boolean) => void;
  nameCard: string;
};

export const Card: React.FC<Props> = ({
  nameCard,
  isCardSelected,
  setCardSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const classes = useCardStyles({ isOpen, isSelect, isCardSelected });

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
