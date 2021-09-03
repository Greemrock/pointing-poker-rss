import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as DeleteImg } from '../assets/svg/delete.svg';

const useStyles = makeStyles({
  fild: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Roboto',
    width: '300px',
    height: '75px',
    background: '#ffffff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
    padding: '10px 15px',
  },
  container: {
    display: 'flex',
    overflow: 'hidden',
  },
  userIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '55px',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '56px',
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
    marginLeft: '15px',
    whiteSpace: 'nowrap',
  },
  userPointer: {
    height: '11px',
    fontWeight: 'bold',
    fontSize: '8px',
  },
  userName: {
    fontWeight: 300,
    fontSize: '26px',
  },
  userJob: {
    fontWeight: 300,
    fontSize: '10px',
  },
  delete: {
    display: 'flex',
    alignItems: 'center',
  },
  svg: {
    width: '35px',
    height: '35px',
    marginLeft: '15px',
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

interface IMember {
  firstName: string;
  lastName: string;
  jobPosition: string;
  image?: string;
  isYou: boolean;
}

export const Member: React.FC<IMember> = ({
  firstName,
  lastName,
  jobPosition,
  image,
  isYou,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.fild}>
      <div className={classes.container}>
        <div className={classes.userIcon}>
          {image ? (
            <img className={classes.img} src={image} alt="user" />
          ) : (
            <>
              {firstName.slice(0, 1)}
              {lastName.slice(0, 1)}
            </>
          )}
        </div>
        <div className={classes.userInformation}>
          <div className={classes.userPointer}>{isYou ? "IT'S YOU" : ''}</div>
          <div className={classes.userName}>
            {firstName} {lastName}
          </div>
          <div className={classes.userJob}>{jobPosition}</div>
        </div>
      </div>
      <div className={classes.delete}>
        <SvgIcon
          className={classes.svg}
          component={DeleteImg}
          viewBox="0 0 48 48"
        />
      </div>
    </div>
  );
};
