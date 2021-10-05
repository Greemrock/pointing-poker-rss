import makeStyles from '@material-ui/core/styles/makeStyles';
import { SPACE_SM } from '../../Shared/cssConstants';

export const useStyles = makeStyles(() => ({
  mainBlock: {
    marginBottom: SPACE_SM,
  },
  boxBlock: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  adminCardBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsBlock: {
    width: '180px',
    marginTop: SPACE_SM,
    display: 'flex',
    justifyContent: 'space-around',
  },
  stopGameButton: {
    height: '40px',
  },
}));
