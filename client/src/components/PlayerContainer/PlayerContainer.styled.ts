import { makeStyles } from '@material-ui/core';
import { SPACE_SM } from './../../Shared/cssConstants';

export const usePlayerContainerStyles = makeStyles({
  title: {
    marginBottom: SPACE_SM,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});
