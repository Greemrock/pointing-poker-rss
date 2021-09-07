import React, { FC } from 'react';
import { Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { getInitialLetters } from '../../../Util/getInitialLetters';

type Props = {
  image: string | null | undefined;
  avatarCSSClass: string;
  firstLetterName: string;
  firstLetterSurname: string;
};

export const FormAvatar: FC<Props> = ({
  image,
  avatarCSSClass,
  firstLetterName,
  firstLetterSurname,
}) => {
  return (
    <div>
      {image ? (
        <Avatar className={avatarCSSClass} src={image}></Avatar>
      ) : (
        <Avatar className={avatarCSSClass}>
          {firstLetterName === '' && firstLetterSurname === '' ? (
            <PersonIcon fontSize="large" />
          ) : (
            getInitialLetters(firstLetterName, firstLetterSurname)
          )}
        </Avatar>
      )}
    </div>
  );
};
