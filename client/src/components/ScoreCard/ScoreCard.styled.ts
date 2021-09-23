import { makeStyles } from '@material-ui/core';
import {
  GREEN_2,
  RED,
  SIZE_XS,
  SIZE_XXS,
  SPACE_SM,
  SPACE_XS,
  SPACE_XXS,
  SPACE_XXXS,
} from '../../Shared/cssConstants';

export const useScoreCardStyles = makeStyles({
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: SPACE_XXXS,
    width: '160px',
    height: '40px',
    padding: `${SPACE_XXS} ${SPACE_XXS} ${SPACE_XXS} ${SPACE_XS}`,
  },
  userPointer: {
    fontWeight: 'bold',
    fontSize: SIZE_XXS,
  },
});
