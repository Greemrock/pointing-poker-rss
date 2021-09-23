import { makeStyles } from '@material-ui/core';
import {
  GREEN_2,
  RED,
  SIZE_XS,
  SIZE_XXS,
  SPACE_MD,
  SPACE_SM,
  SPACE_XS,
  SPACE_XXS,
  SPACE_XXXS,
} from '../../Shared/cssConstants';

export const useScoreContainerStyles = makeStyles({
  root: {
    marginTop: SPACE_MD,
    marginBottom: SPACE_MD,
  },
  title: {
    marginBottom: SPACE_SM,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});
