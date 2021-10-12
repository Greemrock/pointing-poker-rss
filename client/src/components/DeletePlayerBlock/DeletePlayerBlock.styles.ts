import { GREEN_3, SPACE_MD, SPACE_XL } from './../../Shared/cssConstants';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  boxBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heding: {
    marginTop: SPACE_MD,
    textAlign: 'center',
    fontWeight: 700,
  },
  textBlock: {
    marginTop: SPACE_MD,
    marginBottom: SPACE_XL,
  },
  nameSpan: {
    color: GREEN_3,
    fontWeight: 700,
  },
  buttonsBlock: {
    margin: SPACE_MD,
  },
});
