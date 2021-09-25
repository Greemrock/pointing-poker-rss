import { makeStyles, Theme } from '@material-ui/core/styles';
import { SPACE_MD } from './../../Shared';

export const useScorePlayersStyled = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '30%',
    display: 'flex',
    width: '346px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '340px',
      marginTop: SPACE_MD,
    },
  },
}));
