import { makeStyles } from '@material-ui/core';
import {
  DARK_BLUE,
  SAND,
  WHITE,
  SPACE_MD,
  SIZE_XXS,
} from '../../Shared/cssConstants';

export const useFooterStyles = makeStyles({
  topBlock: {
    width: '100%',
    height: '56px',
    backgroundColor: DARK_BLUE,
  },
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: `0 ${SPACE_MD}`,
    color: WHITE,
    cursor: 'pointer',
    '&': {
      '& path': {
        fill: WHITE,
      },
    },
    '&:hover': {
      '& path': {
        fill: SAND,
      },
      '& p': {
        color: SAND,
      },
    },
  },
  icon: {
    marginRight: SIZE_XXS,
  },
});
