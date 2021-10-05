import { SIZE_SM } from './../../Shared/cssConstants';
import { makeStyles } from '@material-ui/core';
import { SPACE_XXS, SPACE_XXXS } from '../../Shared';

export const useScoreCardStyles = makeStyles({
  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: SPACE_XXXS,
    width: '100px',
    height: '75px',
    padding: SPACE_XXS,
  },
  userPointer: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: SIZE_SM,
  },
});
