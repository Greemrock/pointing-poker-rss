import React, { useContext, useEffect } from 'react';
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
import { cardsArrays } from '../../Shared/settingsArrays';
import { Decks } from '../../Shared/enums';
import { Card } from '../Card';
import { decksArray } from '../../Shared/settingsArrays';
import { AppContext } from '../../App';
import {
  SetTimerActionCreator,
  SetMinutesActionCreator,
  SetSecondsActionCreator,
  SetDeckActionCreator,
  SetRoomIdActionCreator,
} from '../../reducers/settings';
import { SettingsContext } from '../../context/settings.context';

export const Settings: React.FC = () => {
  const { appState, dispatch } = useContext(AppContext);
  const {
    settingsState: { currentSets },
    settingsDispatch,
  } = useContext(SettingsContext);
  const classes = useStyles();
  const decksItems = decksArray.map((el: { val: string; name: string }) => (
    <MenuItem key={el.val} value={el.val}>
      {el.name}
    </MenuItem>
  ));

  useEffect(() => {
    settingsDispatch(
      SetRoomIdActionCreator(appState.currentPlayer.roomId as string)
    );
  }, []);

  const cardsPreview = '';

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    settingsDispatch(SetDeckActionCreator(event.target.value as Decks));
  };

  const handleSwitcherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settingsDispatch(SetTimerActionCreator());
  };

  const handleSecondsChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    settingsDispatch(SetSecondsActionCreator(event.target.value as number));
  };

  const handleMinutesChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    settingsDispatch(SetMinutesActionCreator(event.target.value as number));
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
              value={currentSets.deck}
              onChange={handleSelectChange}
            >
              {decksItems}
            </Select>
          </FormControl>
          <FormControl className={classes.switcherLabel}>
            <AntSwitch
              checked={currentSets.isTimerNeeded}
              onChange={handleSwitcherChange}
              id="observer"
              name="observer"
            />
            <Typography>Would you like a story timer?</Typography>
          </FormControl>
          {currentSets.isTimerNeeded ? (
            <SettingsTimer
              minutes={currentSets.minutes}
              seconds={currentSets.seconds}
              stylesBox={classes.boxTimer}
              stylesText={classes.timerText}
              stylesMinutes={classes.minutesBlock}
              handleMinutesChange={handleMinutesChange}
              handleSecondsChange={handleSecondsChange}
            />
          ) : null}
          <Container className={classes.cardsPreviewBlock}>
            {cardsPreview}
          </Container>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
