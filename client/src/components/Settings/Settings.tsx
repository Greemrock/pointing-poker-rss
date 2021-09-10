import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles, AntSwitch } from './Settings.styles';

export const Settings: React.FC = () => {
  const [deck, setDeck] = useState<string>('fibonacci');
  const [isTimer, setIsTimer] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const classes = useStyles();

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
              <MenuItem value="fibonacci">
                Fibonacci - ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, Pass )
              </MenuItem>
              <MenuItem value="modified fibonacci">
                Modif. Fibonacci - ( 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?,
                Pass )
              </MenuItem>
              <MenuItem value="T-shirts">
                T-shirts - ( xxs, xs, s, m, l, xl, xxl, ?, Pass )
              </MenuItem>
              <MenuItem value="Powers">
                Powers of 2 - ( 0, 1, 2, 4, 8, 16, 32, 64, ?, Pass )
              </MenuItem>
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
            <Box className={classes.boxTimer}>
              <Typography className={classes.timerText}>Timer: </Typography>
              <FormControl variant="outlined">
                <InputLabel id="minutesInput">Min.</InputLabel>
                <Select
                  labelId="minutesSelect"
                  id="minutesSelect"
                  value={minutes}
                  onChange={handleMinutesChange}
                  label="Min."
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel id="secondsInput">Sec.</InputLabel>
                <Select
                  labelId="secondsSelect"
                  id="secondsSelect"
                  value={seconds}
                  onChange={handleSecondsChange}
                  label="Sec."
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
