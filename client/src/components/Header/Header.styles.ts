import {
  DARK_BLUE,
  GREEN_3,
  SPACE_LG,
  SAND,
  WHITE,
  SIZE_MD,
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
    '&': {
      '& path': {
        fill: WHITE,
      },
    },
    '&:hover': {
      '& path': {
        fill: SAND,
      },
    },
  },
});
