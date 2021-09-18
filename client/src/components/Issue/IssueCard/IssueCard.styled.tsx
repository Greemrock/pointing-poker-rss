import { makeStyles } from '@material-ui/core';
import {
  DARK_BLUE,
  GREEN_1,
  GREEN_2,
  RED,
  SIZE_MD,
  SIZE_XXS,
  SPACE_SM,
  SPACE_XS,
  SPACE_XXXS,
} from '../../../Shared/cssConstants';
import { Issue, SizeCard } from '../../../Shared/enums';

export const useIssueCardStyles = makeStyles({
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: SPACE_XXXS,
    width: ({ view, size }: { view?: Issue; size?: SizeCard }) =>
      view === Issue.delete || size ? '250px' : '300px',
    height: ({ view, size }: { view?: Issue; size?: SizeCard }) =>
      view === Issue.delete || size ? '62px' : '75px',
    padding: `${SPACE_XS} ${SPACE_XS} ${SPACE_XS} ${SPACE_SM}`,
    boxSizing: 'border-box',
    background: ({
      isDone,
      id,
      currentId,
    }: {
      isDone: boolean;
      id: string;
      currentId: string;
      view?: Issue;
      size?: SizeCard;
    }) => (isDone ? GREEN_1 : id === currentId ? GREEN_2 : ''),
  },
  wrapperText: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  adminWView: {
    display: 'flex',
    flexDirection: 'row',
  },
  current: {
    height: '12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: SIZE_XXS,
  },
  priority: {
    fontSize: SIZE_XXS,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: SIZE_MD,
    fontWeight: 300,
    lineHeight: '32px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  delete: {
    width: '42px',
    height: '42px',
    '& svg': {
      width: '32px',
      height: '32px',
    },
    '&:hover': {
      '& path': {
        fill: RED,
      },
    },
  },
  edit: {
    width: '42px',
    height: '42px',
    '& svg': {
      width: '32px',
      height: '32px',
    },
    '&:hover': {
      '& path': {
        fill: DARK_BLUE,
      },
    },
  },
  add: {
    width: '46px',
    height: '46px',
    '& svg': {
      width: '46px',
      height: '46px',
    },
    '&:hover': {
      '& path': {
        fill: DARK_BLUE,
      },
    },
  },
});
