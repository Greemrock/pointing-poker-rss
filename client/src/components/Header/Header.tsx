import { AppBar, makeStyles, Paper, Typography } from '@material-ui/core';
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
import React from 'react';

const useStyles = makeStyles({
  topBlock: {
    backgroundColor: DARK_BLUE,
    width: '100%',
    height: SPACE_LG,
  },
  bottomBlock: {
    backgroundColor: GREEN_3,
    width: '100%',
    height: SPACE_MD,
  },
  logoBlock: {
    width: SPACE_L,
    height: SPACE_L,
    transform: `rotateZ(45deg) translate(${SPACE_L}, -${SPACE_MD})`,
    backgroundColor: SAND,
    borderRadius: '2px',
  },
  firstLetter: {
    color: WHITE,
    fontSize: SIZE_MD,
    fontWeight: 700,
    transform: `rotateZ(-45deg) translate(${SPACE_XXS}, 0)`,
  },
  secondLetter: {
    color: GREEN_3,
    fontSize: SIZE_MD,
    fontWeight: 700,
    transform: `rotateZ(-45deg) translate(${SPACE_XL}, -${SPACE_XL})`,
  },
});

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <div className={classes.topBlock}>
          <Paper className={classes.logoBlock} elevation={1}>
            <Typography className={classes.firstLetter}>p</Typography>
            <Typography className={classes.secondLetter}>p</Typography>
          </Paper>
        </div>
        <div className={classes.bottomBlock}></div>
      </AppBar>
    </div>
  );
};
