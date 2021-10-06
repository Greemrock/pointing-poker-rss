import { WHITE } from './../../Shared/cssConstants';
import { makeStyles, Theme } from '@material-ui/core';
import { SPACE_MD, SPACE_XL } from '../../Shared';

export const useResultPageStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: SPACE_MD,
    paddingBottom: SPACE_XL,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  nameGame: {
    display: 'flex',
    justifyContent: 'center',
  },
  statistic: {
    position: 'relative',
    marginBottom: SPACE_MD,
  },
  download: {
    width: '200px',
    '& a': {
      textDecoration: 'none',
      color: WHITE,
    },
  },
}));
