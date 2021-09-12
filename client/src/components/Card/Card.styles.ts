import { Theme } from '@material-ui/core/styles/createTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  SPACE_XS,
  SPACE_SM,
  SIZE_LG,
  SIZE_XS,
} from '../../Shared/cssConstants';

export const useStyles = makeStyles((theme: Theme) => ({
  cardBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '95px',
    height: '150px',
    margin: SPACE_XS,
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '10px',
    '&:hover': {
      borderWidth: '3px',
    },
  },
  topText: {
    width: '100%',
    height: '10%',
    paddingLeft: SPACE_SM,
    fontSize: SIZE_XS,
    fontWeight: 700,
    lineHeight: '15px',
  },
  bottomText: {
    width: '100%',
    height: '10%',
    paddingRight: SPACE_SM,
    textAlign: 'right',
    fontSize: SIZE_XS,
    fontWeight: 700,
    lineHeight: '15px',
  },
  centerBlock: {
    display: 'flex',
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
}));
