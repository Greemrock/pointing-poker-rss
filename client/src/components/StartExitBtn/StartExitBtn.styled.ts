import { makeStyles } from '@material-ui/core';

export const useStartExitGameStyles = makeStyles({
  root: {
    margin: '24px 0',
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
  btn: {
    marginLeft: '-8px',
  },
  container: {
    display: 'flex',
    justifyContent: ({ admin }: { admin: boolean }) =>
      admin ? 'space-between' : 'flex-end',
    marginTop: '32px',
  },
});
