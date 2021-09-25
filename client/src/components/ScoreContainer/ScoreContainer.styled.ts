import { makeStyles } from '@material-ui/core';
import { SPACE_MD, SPACE_SM } from '../../Shared/cssConstants';

export const useScoreContainerStyles = makeStyles({
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
