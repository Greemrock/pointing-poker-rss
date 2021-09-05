import makeStyles from '@material-ui/core/styles/makeStyles';
import { lightGreen } from '@material-ui/core/colors';
import { SPACE_XL, SPACE_XS, SPACE_XXS } from '../../../Shared/cssConstants';

export const useStyles = makeStyles(() => ({
  welcomeStartBlock: {
    width: '100%',
  },
  welcomeStartAsDillerBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACE_XL,
  },
  welcomeStartAsDillerButton: {
    marginLeft: SPACE_XS,
  },
  welcomeStartAsPlayerBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeStartForm: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  welcomeStartHeading: {
    fontWeight: 700,
    color: lightGreen[500],
  },
  welcomeStartButton: {
    padding: SPACE_XS,
    marginLeft: `-${SPACE_XS}`,
    borderRadius: `0 ${SPACE_XXS} ${SPACE_XXS} 0`,
  },
}));
