import { makeStyles } from '@material-ui/core';

export const useStartExitGameStyles = makeStyles({
  root: {
    margin: '20px 0',
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 300,
  },
  input: {
    '& fieldset': {
      borderRadius: '4px 0 0 4px',
    },
  },
  btn: {
    borderRadius: '0 4px 4px 0',
  },
  container: {
    display: 'flex',
    justifyContent: ({ isAdmin }: { isAdmin: boolean }) =>
      isAdmin ? 'space-between' : 'flex-end',
    marginTop: '30px',
  },
});
