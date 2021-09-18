import { SPACE_MD, SPACE_XXL } from './../../../Shared/cssConstants';
import { makeStyles } from '@material-ui/core';
import { SPACE_XXS } from '../../../Shared';

export const useChatBlockStyles = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    maxWidth: '500px',
    maxHeight: '700px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: '30px',
  },
  paper: {
    width: '80vw',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  messagesBody: {
    width: `calc(100% - ${SPACE_MD})`,
    height: `calc(100% - ${SPACE_XXL})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: SPACE_XXS,
    overflowY: 'scroll',
  },
});
