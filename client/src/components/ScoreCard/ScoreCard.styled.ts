import { makeStyles } from '@material-ui/core';
import { SIZE_XS, SPACE_XXS, SPACE_XXXS } from '../../Shared';

export const useScoreCardStyles = makeStyles({
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: SPACE_XXXS,
    minWidth: '80px',
    height: '40px',
    padding: SPACE_XXS,
  },
  userPointer: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: SIZE_XS,
  },
});
