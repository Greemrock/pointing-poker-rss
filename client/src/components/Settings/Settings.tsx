import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles, AntSwitch } from './Settings.styles';
import { SettingsTimer } from './SettingsTimer';

const decksArray = [
  { val: 'fibonacci', name: 'Fibonacci' },
  { val: 'modifiedFibonacci', name: 'Modif. Fibonacci' },
  { val: 'tshirts', name: 'T-shirts' },
  { val: 'powers', name: 'Powers of 2' },
];

export const Settings: React.FC = () => {
  const [deck, setDeck] = useState<string>('fibonacci');
  const [isTimer, setIsTimer] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const classes = useStyles();

  const decksItems = decksArray.map((el: { val: string; name: string }) => (
    <MenuItem key={el.val} value={el.val}>
      {el.name}
    </MenuItem>
  ));
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDeck(event.target.value as string);
  };
  const handleSwitcherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTimer(event.target.checked);
  };
  const handleSecondsChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSeconds(event.target.value as number);
  };
  const handleMinutesChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setMinutes(event.target.value as number);
  };
  return (
    <Container className={classes.mainSettingsBlock}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="settings-content"
          id="settings-header"
        >
          <Typography>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionInnerBlock}>
          <FormControl variant="filled">
            <InputLabel id="deckSelectInput">Deck</InputLabel>
            <Select
              labelId="deckSelect"
              id="deckSelect"
              value={deck}
              onChange={handleSelectChange}
            >
              {decksItems}
            </Select>
          </FormControl>
          <FormControl className={classes.switcherLabel}>
            <AntSwitch
              checked={isTimer}
              onChange={handleSwitcherChange}
              id="observer"
              name="observer"
            />
            <Typography>Would you like a story timer?</Typography>
          </FormControl>
          {isTimer ? (
            <SettingsTimer
              minutes={minutes}
              seconds={seconds}
              stylesBox={classes.boxTimer}
              stylesText={classes.timerText}
              stylesMinutes={classes.minutesBlock}
              handleMinutesChange={handleMinutesChange}
              handleSecondsChange={handleSecondsChange}
            />
          ) : null}
          <Container className={classes.cardsPreviewBlock}>{''}</Container>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
