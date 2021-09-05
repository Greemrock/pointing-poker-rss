import { createStyles, makeStyles } from '@material-ui/core';
import {
  GREEN_2,
  SIZE_XS,
  SIZE_XXS,
  SPACE_SM,
  SPACE_XS,
} from '../../Shared/cssConstants';

export const usePlayerCardStyles = makeStyles(() =>
  createStyles({
    field: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Roboto',
      width: '300px',
      height: '75px',
      padding: `${SPACE_XS} ${SPACE_XS} ${SPACE_XS} ${SPACE_SM}`,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    },
    avatar: {
      width: '60px',
      height: '60px',
      background: GREEN_2,
    },
    img: {
      height: '100%',
      width: 'auto',
    },
    userInformation: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      whiteSpace: 'nowrap',
      marginLeft: SPACE_XS,
    },
    userPointer: {
      height: '12px',
      fontWeight: 'bold',
      fontSize: SIZE_XXS,
    },
    userName: {
      fontWeight: 300,
    },
    userJob: {
      fontWeight: 300,
      fontSize: SIZE_XS,
    },
    svg: {
      height: '40px',
      padding: '0',
      '& svg': {
        width: '40px',
        height: '40px',
      },
      '&:hover': {
        '& path': {
          fill: '#c80000',
        },
      },
    },
  })
);
