import { makeStyles } from '@material-ui/core';
import { SPACE_MD } from './../../Shared/cssConstants';

export const useVoteGraphStyled = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: SPACE_MD,
  },
  graph: {
    maxnWidth: 300,
  },
});
