import makeStyles from '@material-ui/core/styles/makeStyles';
import { SPACE_L, SHADOW, GRAY_2, GREEN_1 } from './../../Shared/cssConstants';
import { SPACE_XS, SIZE_LG, SIZE_XS } from '../../Shared/cssConstants';

export const useCardStyles = makeStyles(() => ({
  cardBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative',
    width: '80px',
    height: '136px',
    margin: SPACE_XS,
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.5s',
    marginRight: `-${SPACE_L}`,
    zIndex: 1,
    marginTop: ({ isOpen }: { isOpen: boolean }) => (isOpen ? 0 : ''),
    boxShadow: ({ isOpen }: { isOpen: boolean }) => (isOpen ? SHADOW : ''),
    backgroundColor: ({ isOpen }: { isOpen: boolean }) =>
      isOpen ? GRAY_2 : '',
  },
  clickFild: {
    display: 'flex',
    justifyContent: 'center',
    width: '80px',
    position: 'absolute',
    textAlign: 'center',
    zIndex: 0,
    transition: 'all 0.5s',
    top: ({ isOpen }: { isOpen: boolean }) => (isOpen ? '-40px' : 0),
    backgroundColor: GREEN_1,
  },
  topText: {
    width: '100%',
    height: '10%',
    paddingLeft: SPACE_XS,
    fontSize: SIZE_XS,
    fontWeight: 700,
  },
  bottomText: {
    width: '100%',
    height: '10%',
    paddingLeft: SPACE_XS,
    textAlign: 'left',
    fontSize: SIZE_XS,
    fontWeight: 700,
    transform: 'rotate(180deg)',
    zIndex: 0,
  },
  centerBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%',
    '& p': {
      fontSize: SIZE_LG,
      fontWeight: 700,
      lineHeight: '50px',
    },
    '& .MuiSvgIcon-root': {
      width: '50px',
      height: '50px',
    },
  },
}));
