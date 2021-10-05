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
import { Decks } from '../../Shared/enums';
import { decksArray } from '../../Shared/settingsArrays';
import { UsersContext } from '../../context/';
import {
  SetTimerActionCreator,
  SetMinutesActionCreator,
  SetSecondsActionCreator,
  SetDeckActionCreator,
  SetRoomIdActionCreator,
} from '../../reducers/settings';
import { SettingsContext } from '../../context/settings.context';
import { CardContainer } from '../CardContainer';

export const Settings: React.FC = () => {
  const { appState } = useContext(UsersContext);
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

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    settingsDispatch(SetDeckActionCreator(event.target.value as Decks));
  };

  const handleSwitcherChange = () => {
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
            <CardContainer deck={currentSets.deck} />
          </Container>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
