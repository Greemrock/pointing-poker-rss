import makeStyles from '@material-ui/core/styles/makeStyles';
import { SPACE_SM, SIZE_LG } from '../../Shared/cssConstants';

export const useStyles = makeStyles(() => ({
  topText: {
    width: '100%',
    height: '10%',
    textAlign: 'center',
    paddingLeft: SPACE_SM,
    fontSize: SIZE_LG,
    fontWeight: 700,
  },
  paperDigits: {
    width: '180px',
  },
  centerBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '220px',
    height: '70%',
    '& p': {
      fontSize: SIZE_LG,
      fontWeight: 400,
      lineHeight: '50px',
    },
    '& .MuiSvgIcon-root': {
      width: '40px',
      height: '40px',
    },
  },
  timerButton: {
    '& .MuiButton-startIcon': {
      margin: 0,
    },
    width: '40%',
  },
  buttonsBlock: {
    width: '180px',
    marginTop: SPACE_SM,
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
