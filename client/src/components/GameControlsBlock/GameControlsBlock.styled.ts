import { SPACE_LG, SPACE_MD, SPACE_XS } from '../../Shared/cssConstants';
import { makeStyles } from '@material-ui/core';

export const useStartExitGameStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: SPACE_MD,
    marginBottom: SPACE_MD,
  },
  btn: {
    width: '120px',
    height: '40px',
    margin: SPACE_XS,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
