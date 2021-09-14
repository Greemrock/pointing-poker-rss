import { SPACE_LG, SPACE_MD, SPACE_XS } from './../../Shared/cssConstants';
import { makeStyles } from '@material-ui/core';

export const useStartExitGameStyles = makeStyles({
  root: {
    marginTop: SPACE_MD,
    marginBottom: SPACE_MD,
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
  btn: {
    marginLeft: `-${SPACE_XS}`,
  },
  container: {
    display: 'flex',
    justifyContent: ({ isAdmin }: { isAdmin: boolean }) =>
      isAdmin ? 'space-between' : 'flex-end',
    marginTop: SPACE_LG,
  },
});
