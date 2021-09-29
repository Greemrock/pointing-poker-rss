import {
  SPACE_XXS,
  SPACE_MD,
  SPACE_SM,
  SPACE_XS,
  BLUE,
  GREEN_4,
} from './../../../Shared/cssConstants';
import { makeStyles, Theme } from '@material-ui/core';

export const useMessageStyles = makeStyles((theme: Theme) => ({
  messageRow: {
    display: 'flex',
    margin: `0 ${SPACE_MD}`,
  },
  messageRowRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: `0 ${SPACE_MD}`,
  },
  messageLeft: {
    position: 'relative',
    marginLeft: SPACE_MD,
    marginBottom: SPACE_XS,
    padding: `${SPACE_XXS} ${SPACE_SM} ${SPACE_XXS}`,
    backgroundColor: BLUE,
    maxWidth: '280px',
    wordWrap: 'break-word',
    textAlign: 'left',
    borderRadius: SPACE_XS,
    '&:after': {
      content: "''",
      position: 'absolute',
      borderTop: `15px solid ${BLUE}`,
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      top: 0,
      left: '-15px',
    },
  },
  messageRight: {
    position: 'relative',
    right: SPACE_MD,
    marginRight: SPACE_MD,
    marginBottom: SPACE_XS,
    padding: `${SPACE_XXS} ${SPACE_SM} ${SPACE_XXS}`,
    backgroundColor: GREEN_4,
    maxWidth: '280px',
    wordWrap: 'break-word',
    width: '100%',
    textAlign: 'left',
    borderRadius: SPACE_XS,
    '&:after': {
      content: "''",
      position: 'absolute',
      borderTop: `15px solid ${GREEN_4}`,
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      top: 0,
      right: '-15px',
    },
  },
  messageContent: {
    padding: 0,
    margin: 0,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  displayName: {
    marginLeft: SPACE_MD,
  },
  displayNameRight: {
    marginRight: SPACE_MD,
  },
}));
