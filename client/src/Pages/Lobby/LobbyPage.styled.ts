import makeStyles from '@material-ui/core/styles/makeStyles';
import { SPACE_XL, SPACE_MD } from './../../Shared/cssConstants';

export const useLobbyPageStyles = makeStyles(() => ({
  container: {
    maxWidth: '70%',
    paddingTop: SPACE_MD,
    paddingBottom: SPACE_XL,
  },
  nameGame: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
