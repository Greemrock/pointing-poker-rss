import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { minutesArray, secondsArray } from '../../Shared/settingsArrays';
type Props = {
  minutes: number;
  seconds: number;
  stylesBox: string;
  stylesText: string;
  stylesMinutes: string;
  handleSecondsChange: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
  handleMinutesChange: (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => void;
};

export const SettingsTimer: React.FC<Props> = ({
  minutes,
  seconds,
  stylesBox,
  stylesText,
  stylesMinutes,
  handleSecondsChange,
  handleMinutesChange,
}) => {
  const minutesItems = minutesArray.map((el: number) => (
    <MenuItem key={el} value={el}>
      {el}
    </MenuItem>
  ));
  const secondsItems = secondsArray.map((el: number) => (
    <MenuItem key={el} value={el}>
      {el}
    </MenuItem>
  ));
  return (
    <Box className={stylesBox}>
      <Typography className={stylesText}>Timer: </Typography>
      <FormControl className={stylesMinutes} variant="outlined">
        <InputLabel id="minutesInput">Min.</InputLabel>
        <Select
          labelId="minutesSelect"
          id="minutesSelect"
          value={minutes}
          onChange={handleMinutesChange}
          label="Min."
        >
          {minutesItems}
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
          {secondsItems}
        </Select>
      </FormControl>
    </Box>
  );
};
