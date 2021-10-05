import { makeStyles } from '@material-ui/core';

export const useVoteGraphStyled = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  graph: {
    maxWidth: '300px',
  },
  overallResult: {
    width: '100%',
    position: 'absolute',
    bottom: '38%',
  },
});
