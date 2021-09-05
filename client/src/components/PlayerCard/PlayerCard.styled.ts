import { makeStyles } from '@material-ui/core';
import {
  GREEN_2,
  RED,
  SIZE_XS,
  SIZE_XXS,
  SPACE_SM,
  SPACE_XS,
  SPACE_XXS,
} from '../../Shared/cssConstants';

export const usePlayerCardStyles = makeStyles({
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: SPACE_XXS,
    width: ({ size }: { size: string | undefined }) =>
      size === 'small' ? '160px' : '300px',
    height: ({ size }: { size: string | undefined }) =>
      size === 'small' ? '40px' : '75px',
    padding: ({ size }: { size: string | undefined }) =>
      size === 'small'
        ? `${SPACE_XXS} ${SPACE_XXS} ${SPACE_XXS} ${SPACE_XS}`
        : `${SPACE_XS} ${SPACE_XS} ${SPACE_XS} ${SPACE_SM}`,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: ({ size }: { size: string | undefined }) =>
      size === 'small' ? '30px' : '60px',
    height: ({ size }: { size: string | undefined }) =>
      size === 'small' ? '30px' : '60px',
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
    fontSize: ({ size }: { size: string | undefined }) =>
      size === 'small' ? SIZE_XS : '',
    fontWeight: 300,
  },
  userJob: {
    fontWeight: 300,
    fontSize: SIZE_XS,
  },
  svg: {
    height: ({ size }: { size: string | undefined }) =>
      size === 'small' ? '30px' : '40px',
    padding: '0',
    '& svg': {
      width: ({ size }: { size: string | undefined }) =>
        size === 'small' ? '30px' : '40px',
      height: ({ size }: { size: string | undefined }) =>
        size === 'small' ? '30px' : '40px',
    },
    '&:hover': {
      '& path': {
        fill: RED,
      },
    },
  },
});
