import { makeStyles, Theme } from '@material-ui/core/styles';
import { SPACE_MD, SPACE_XXL, SPACE_XXS, GRAY_2 } from './../../Shared';

export const useScorePlayersStyled = makeStyles((theme: Theme) => ({
  btnScore: {
    position: 'fixed',
    margin: SPACE_MD,
    marginBottom: SPACE_XXL,
    bottom: SPACE_XXL,
    right: 0,
  },
  box: {
    width: '520px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.55s opacity, .55s visibility',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  scoreBody: {
    width: `calc(100% - ${SPACE_MD})`,
    height: `calc(100% - ${SPACE_MD})`,
    margin: SPACE_XXS,
    '& button': { borderColor: GRAY_2 },
  },
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
  },
}));
