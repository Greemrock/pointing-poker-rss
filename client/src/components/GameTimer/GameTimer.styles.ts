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
  centerBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%',
    '& p': {
      fontSize: SIZE_LG,
      fontWeight: 700,
      lineHeight: '50px',
    },
    '& .MuiSvgIcon-root': {
      width: '50px',
      height: '50px',
    },
  },
  timerButton: {
    '& .MuiButton-startIcon': {
      margin: 0,
    },
  },
  buttonsBlock: {
    width: '180px',
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
