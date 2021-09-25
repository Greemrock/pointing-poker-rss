import {
  GREEN_2,
  SPACE_MD,
  SPACE_LG,
  SPACE_XS,
  SPACE_XXS,
} from './../../Shared/cssConstants';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Switch from '@material-ui/core/Switch/Switch';

export const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 37,
      height: 20,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 3,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(17px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: GREEN_2,
          borderColor: GREEN_2,
        },
      },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 10,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch);

export const useStyles = makeStyles((theme: Theme) => ({
  mainSettingsBlock: {
    width: '100%',
  },
  accordionInnerBlock: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: SPACE_MD,
  },
  switcherLabel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: `${SPACE_LG} 0`,
    '& .MuiTypography-root': {
      margin: `0 ${SPACE_XS}`,
    },
  },
  boxTimer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: SPACE_LG,
  },
  timerText: {
    marginRight: SPACE_XS,
  },
  minutesBlock: {
    marginRight: SPACE_XXS,
  },
  cardsPreviewBlock: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      '& div': {
        marginRight: `-${SPACE_LG}`,
      },
    },
  },
}));
