import { makeStyles } from '@material-ui/core';
import { SPACE_SM, SPACE_MD } from './../../Shared/cssConstants';

export const usePlayerContainerStyles = makeStyles({
  root: {
    marginTop: SPACE_MD,
    marginBottom: SPACE_MD,
  },
  title: {
    marginBottom: SPACE_SM,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});
