import makeStyles from '@material-ui/core/styles/makeStyles';
import { GRAY, GREEN_1 } from './../../Shared/cssConstants';
import {
  SPACE_XS,
  SIZE_LG,
  SIZE_XS,
  SPACE_L,
  SHADOW,
  GRAY_2,
  GREEN_2,
  GREEN_3,
} from '../../Shared/cssConstants';

export const useCardContainerStyled = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
