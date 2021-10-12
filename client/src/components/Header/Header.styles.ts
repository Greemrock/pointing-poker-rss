import { DARK_BLUE } from '../../Shared/cssConstants';

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  topBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: DARK_BLUE,
    width: '100%',
    height: '60px',
  },
});
