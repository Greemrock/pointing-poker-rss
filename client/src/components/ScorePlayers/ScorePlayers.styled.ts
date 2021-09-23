import { makeStyles } from '@material-ui/core/styles';
import {
  SIZE_SM,
  SPACE_LG,
  SPACE_MD,
  SPACE_XL,
} from '../../Shared/cssConstants';

export const useScorePlayersStyled = makeStyles(() => ({
  root: {
    maxWidth: '500px',
    display: 'flex',
  },
}));
