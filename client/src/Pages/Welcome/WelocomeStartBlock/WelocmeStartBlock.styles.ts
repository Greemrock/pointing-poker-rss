import makeStyles from '@material-ui/core/styles/makeStyles';
import { SPACE_XL, SPACE_XS, SPACE_XXS } from '../../../Shared/cssConstants';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField/TextField';

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
  },
  welcomeStartButton: {
    padding: SPACE_XS,
    marginLeft: `-${SPACE_XS}`,
    borderRadius: `0 ${SPACE_XXS} ${SPACE_XXS} 0`,
  },
}));

export const CustomizedBorderTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
        borderWidth: '1px',
      },
    },
  },
})(TextField);
