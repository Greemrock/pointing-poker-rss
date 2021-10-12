import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useTextInputStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: 'flex',
      justifyContent: 'center',
      width: '95%',
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: '100%',
    },
  })
);
