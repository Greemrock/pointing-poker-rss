import React from 'react';
import { Button, Paper, SvgIcon, Typography } from '@material-ui/core';
import { ReactComponent as DeleteImg } from '../../assets/svg/delete.svg';
import { useMemberStyles } from './Member.styled';

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
  const classes = useMemberStyles();
  return (
    <Paper elevation={3} className={classes.fild}>
      <div className={classes.container}>
        <div className={classes.userIcon}>
          {image ? (
            <img className={classes.img} src={image} alt="user" />
          ) : (
            <Typography variant="h4">
              {firstName.slice(0, 1)}
              {lastName.slice(0, 1)}
            </Typography>
          )}
        </div>
        <div className={classes.userInformation}>
          <Typography className={classes.userPointer}>
            {isYou ? "IT'S YOU" : ''}
          </Typography>
          <Typography className={classes.userName} variant="h5">
            {firstName} {lastName}
          </Typography>
          <Typography className={classes.userJob}>{jobPosition}</Typography>
        </div>
      </div>
      <Button className={classes.delete}>
        <SvgIcon
          className={classes.svg}
          component={DeleteImg}
          viewBox="0 0 48 48"
        />
      </Button>
    </Paper>
  );
};
