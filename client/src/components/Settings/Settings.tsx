import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  FormControl,
  FormControlLabel,
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
  const classes = useStyles();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDeck(event.target.value as string);
  };
  const handleSwitcherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTimer(event.target.checked);
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
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
