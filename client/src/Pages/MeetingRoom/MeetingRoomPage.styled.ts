import { makeStyles, Theme } from '@material-ui/core';
import { SPACE_MD, SPACE_XL } from '../../Shared';

export const useMeetingRoomPageStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: SPACE_MD,
    paddingBottom: SPACE_XL,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wrapper: {
    maxWidth: '70%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  nameGame: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: SPACE_XL,
  },
  middleBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  endGameBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: SPACE_XL,
  },
}));
