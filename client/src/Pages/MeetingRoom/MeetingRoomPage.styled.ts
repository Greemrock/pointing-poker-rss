import { makeStyles } from '@material-ui/core';
import { SPACE_MD, SPACE_XL } from '../../Shared';

export const useMeetingRoomPageStyles = makeStyles(() => ({
  container: {
    // maxWidth: '70%',
    paddingTop: SPACE_MD,
    paddingBottom: SPACE_XL,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wrapper: {
    width: '100%',
  },
  nameGame: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
