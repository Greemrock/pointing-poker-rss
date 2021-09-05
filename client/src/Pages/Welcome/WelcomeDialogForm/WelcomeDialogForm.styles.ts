import makeStyles from '@material-ui/core/styles/makeStyles';
import { blue, lightGreen } from '@material-ui/core/colors';
import withStyles from '@material-ui/core/styles/withStyles';
import Switch from '@material-ui/core/Switch/Switch';

export const useStyles = makeStyles((theme) => ({
  welcomeDialogTitle: {
    margin: theme.spacing(1),
    fontWeight: 700,
  },
  photoInput: {
    display: 'none',
  },
  avatar: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export const GreeenSwitch = withStyles({
  switchBase: {
    color: lightGreen[300],
    '&$checked': {
      color: lightGreen[500],
    },
    '&$checked + $track': {
      backgroundColor: lightGreen[500],
    },
  },
  checked: {},
  track: {},
})(Switch);
