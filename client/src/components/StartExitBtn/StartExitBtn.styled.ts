import { SPACE_LG, SPACE_MD, SPACE_XS } from './../../Shared/cssConstants';
import { makeStyles } from '@material-ui/core';

export const useStartExitGameStyles = makeStyles({
  root: {
    margin: `${SPACE_MD} 0`,
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
    justifyContent: ({ admin }: { admin: boolean }) =>
      admin ? 'space-between' : 'flex-end',
    marginTop: SPACE_LG,
  },
});
