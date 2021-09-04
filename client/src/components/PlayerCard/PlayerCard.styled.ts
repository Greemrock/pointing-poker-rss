import { createStyles, makeStyles } from '@material-ui/core';

export const usePlayerCardStyles = makeStyles(() =>
  createStyles({
    field: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Roboto',
      width: '300px',
      height: '75px',
      padding: '8px 8px 8px 16px',
    },
    container: {
      display: 'flex',
      overflow: 'hidden',
    },
    userIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      height: '100%',
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
      marginLeft: '8px',
    },
    userPointer: {
      height: '12px',
      fontWeight: 'bold',
      fontSize: '8px',
    },
    userName: {
      fontWeight: 300,
    },
    userJob: {
      fontWeight: 300,
      fontSize: '10px',
    },
    svg: {
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
