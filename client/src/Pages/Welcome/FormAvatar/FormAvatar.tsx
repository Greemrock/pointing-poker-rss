import React, { FC } from 'react';
import { Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { getInitialLetters } from '../../../Util/getInitialLetters';

type Props = {
  image: string | null | undefined;
  avatarCSSClass: string;
  name: string;
  surname: string;
};

export const FormAvatar: FC<Props> = ({
  image,
  avatarCSSClass,
  name,
  surname,
}) => {
  return (
    <div>
      {image ? (
        <Avatar className={avatarCSSClass} src={image}></Avatar>
      ) : (
        <Avatar className={avatarCSSClass}>
          {name === '' && surname === '' ? (
            <PersonIcon fontSize="large" />
          ) : (
            getInitialLetters(name, surname)
          )}
        </Avatar>
      )}
    </div>
  );
};
