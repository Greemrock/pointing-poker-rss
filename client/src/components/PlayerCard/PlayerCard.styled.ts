import { makeStyles } from '@material-ui/core';
import {
  GREEN_2,
  RED,
  SIZE_XS,
  SIZE_XXS,
  SPACE_SM,
  SPACE_XS,
  SPACE_XXS,
  SPACE_XXXS,
} from '../../Shared/cssConstants';

export const usePlayerCardStyles = makeStyles({
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: SPACE_XXXS,
    width: ({ size }: { size: string }) =>
      size === 'small' ? '160px' : '300px',
    height: ({ size }: { size: string }) =>
      size === 'small' ? '40px' : '75px',
    padding: ({ size }: { size: string }) =>
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
    width: ({ size }: { size: string }) => (size === 'small' ? '30px' : '60px'),
    height: ({ size }: { size: string }) =>
      size === 'small' ? '30px' : '60px',
    background: GREEN_2,
  },
  img: {
    height: '100%',
    width: 'auto',
  },
  userInformation: {
    width: '100%',
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    marginLeft: SPACE_XS,
  },
  userPointer: {
    height: ({ size }: { size: string }) => (size === 'small' ? '' : '12px'),
    fontWeight: 'bold',
    fontSize: SIZE_XXS,
  },
  userName: {
    fontSize: ({ size }: { size: string }) => (size === 'small' ? SIZE_XS : ''),
    fontWeight: 300,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  userJob: {
    fontWeight: 300,
    fontSize: SIZE_XS,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  svg: {
    height: ({ size }: { size: string }) =>
      size === 'small' ? '30px' : '40px',
    padding: '0',
    '& svg': {
      width: ({ size }: { size: string }) =>
        size === 'small' ? '30px' : '40px',
      height: ({ size }: { size: string }) =>
        size === 'small' ? '30px' : '40px',
    },
    '&:hover': {
      '& path': {
        fill: RED,
      },
    },
  },
});
