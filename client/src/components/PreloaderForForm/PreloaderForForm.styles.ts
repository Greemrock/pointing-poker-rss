import { makeStyles } from '@material-ui/core/styles';
import {
  SIZE_SM,
  SPACE_LG,
  SPACE_MD,
  SPACE_XL,
} from '../../Shared/cssConstants';
export const useStyles = makeStyles((theme) => ({
  preloaderBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: `${SPACE_LG} 0 ${SPACE_XL} 0`,
  },
  loadingText: {
    marginBottom: SPACE_MD,
    fontSize: SIZE_SM,
  },
}));
