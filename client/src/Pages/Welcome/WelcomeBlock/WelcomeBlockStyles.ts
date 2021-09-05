import makeStyles from '@material-ui/core/styles/makeStyles';
import { SPACE_XL } from '../../../Shared/cssConstants';

export const useStyles = makeStyles(() => ({
  welcomeMainContainer: {
    width: '75%',
    marginTop: SPACE_XL,
  },
  welcomePageImage: {
    height: '85%',
  },
  welocmeHeadingWithImageBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: SPACE_XL,
  },
  welcomeHeadingBlock: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  welcomeHeadingText: {
    margin: '0 25%',
    fontWeight: 'bold',
  },
}));
