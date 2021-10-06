import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  isGame: boolean;
}

export const useVoteGraphStyled = makeStyles<Theme, StyleProps>((theme) => ({
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
    bottom: ({ isGame }) => (!isGame ? '42%' : '38%'),
    [theme.breakpoints.down(748)]: {
      bottom: '38%',
    },
  },
}));
