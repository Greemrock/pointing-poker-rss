import {
  DARK_BLUE,
  GREEN_3,
  SPACE_MD,
  SPACE_LG,
  SPACE_L,
  SAND,
  WHITE,
  SPACE_XXS,
  SIZE_MD,
  SPACE_XL,
} from '../../Shared/cssConstants';

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  topBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: DARK_BLUE,
    width: '100%',
    height: '40px',
  },
  bottomBlock: {
    backgroundColor: GREEN_3,
    width: '100%',
    height: '20px',
  },
  logoBlock: {
    width: '40px',
    height: '40px',
    transform: `rotateZ(45deg) translate(40px, -20px)`,
    backgroundColor: SAND,
    borderRadius: '2px',
  },
  firstLetter: {
    color: WHITE,
    fontSize: SIZE_MD,
    fontWeight: 700,
    transform: `rotateZ(-45deg) translate(4px, 0)`,
  },
  secondLetter: {
    color: GREEN_3,
    fontSize: SIZE_MD,
    fontWeight: 700,
    transform: `rotateZ(-45deg) translate(52px, -52px)`,
  },
  chat: {
    marginRight: SPACE_LG,
    '&:hover': {
      '& path': {
        fill: WHITE,
      },
    },
  },
});
