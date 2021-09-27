import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Button,
  ClickAwayListener,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from '@material-ui/core';
import { useCardStyles } from './Card.styles';
import { QuestionIconComponent } from './QuestionIconComponent';
import { CoffeIconComponent } from './CoffeIconComponent';

export const Card: React.FC<{ value: string }> = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useCardStyles({ isOpen });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmitYes = () => {
    handleClose();
  };
  return (
    <div style={{ position: 'relative' }}>
      <Button className={classes.clickFild} onClick={handleSubmitYes}>
        Yes
      </Button>
      <ClickAwayListener onClickAway={handleClose}>
        <Paper
          elevation={2}
          variant="outlined"
          className={classes.cardBlock}
          onClick={handleClick}
        >
          <Typography className={classes.topText}>{value}</Typography>
          <Box className={classes.centerBlock}>
            {value === '?' ? (
              <QuestionIconComponent />
            ) : value === 'Pass' ? (
              <CoffeIconComponent />
            ) : (
              <Typography variant="h3">{value}</Typography>
            )}
          </Box>
          <Typography className={classes.bottomText}>{value}</Typography>
        </Paper>
      </ClickAwayListener>
    </div>
  );
};
