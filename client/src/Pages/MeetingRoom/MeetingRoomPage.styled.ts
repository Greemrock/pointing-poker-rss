import { makeStyles } from '@material-ui/core';
import { SPACE_MD, SPACE_XL } from '../../Shared';
import { useLobbyPageStyles } from '../Lobby/LobbyPage.styled';

export const useMeetingRoomPageStyles = makeStyles(() => ({
  container: {
    maxWidth: '70%',
    paddingTop: SPACE_MD,
    paddingBottom: SPACE_XL,
    border: '1px solid #d2d2d2',
  },
  nameGame: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
