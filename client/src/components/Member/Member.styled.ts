import { makeStyles } from '@material-ui/core';

export const useMemberStyles = makeStyles({
  fild: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Roboto',
    width: '300px',
    height: '75px',
    padding: '8px 8px 8px 15px',
  },
  container: {
    display: 'flex',
    overflow: 'hidden',
  },
  userIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '59px',
    fontWeight: 'bold',
    textAlign: 'center',
    flexShrink: 0,
    borderRadius: '50%',
    background: '#60dabf',
    color: '#ffffff',
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    userSelect: 'none',
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
    marginLeft: '15px',
  },
  userPointer: {
    height: '11px',
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
  delete: {
    display: 'flex',
    minWidth: '52px',
    alignItems: 'center',
  },
  svg: {
    width: '35px',
    height: '35px',
    cursor: 'pointer',
    '& path': {
      transition: 'fill 0.2s ease-out',
    },
    '&:hover': {
      '& path': {
        fill: '#c80000',
      },
    },
  },
});
