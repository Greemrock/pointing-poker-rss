import { makeStyles } from '@material-ui/core';

export const useVoteGraphStyled = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  graph: {
    maxnWidth: 300,
  },
  overallResult: {
    width: '100%',
    position: 'absolute',
    bottom: '24%',
  },
});
