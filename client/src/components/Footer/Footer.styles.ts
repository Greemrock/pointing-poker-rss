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
    backgroundColor: DARK_BLUE,
    width: '100%',
    height: '80px',
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
    margin: SPACE_MD,
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
