import { makeStyles } from '@material-ui/core';
import { SPACE_MD, SPACE_SM } from '../../Shared/cssConstants';

export const useScoreContainerStyles = makeStyles({
  root: {
    marginTop: SPACE_MD,
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
  title: {
    '&::-webkit-scrollbar': {
      width: 0,
    },
    marginBottom: SPACE_SM,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingBottom: SPACE_MD,
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
});
