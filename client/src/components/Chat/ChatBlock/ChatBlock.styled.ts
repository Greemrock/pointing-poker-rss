import { SPACE_MD, SPACE_XXL, SPACE_XS } from './../../../Shared/cssConstants';
import { makeStyles, Theme } from '@material-ui/core';
import { SPACE_XXS } from '../../../Shared';

export const useChatBlockStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.55s opacity, .55s visibility',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  wrapper: {
    height: '96%',
    overflowY: 'scroll',
    paddingTop: SPACE_XS,
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
  paper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  messagesBody: {
    width: `calc(100% - ${SPACE_MD})`,
    height: `calc(100% - ${SPACE_XXL})`,
    margin: SPACE_XXS,
  },
  btnChat: {
    position: 'fixed',
    margin: SPACE_MD,
    marginBottom: SPACE_XXL,
    bottom: 0,
    right: 0,
    animation: `$myEffect 3s ${theme.transitions.duration.complex}`,
  },
  '@keyframes myEffect': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(255, 0, 64, 0.7), 0 0 0 0 rgba(255, 0, 64, 0.7)',
    },
    '40%': {
      boxShadow:
        '0 0 0 15px rgba(255, 0, 64, 0), 0 0 0 0 rgba(255, 0, 64, 0.7)',
    },
    '80%': {
      boxShadow:
        '0 0 0 20px rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(255, 0, 64, 0), 0 0 0 30px rgba(255, 0, 64, 0)',
    },
  },
}));
