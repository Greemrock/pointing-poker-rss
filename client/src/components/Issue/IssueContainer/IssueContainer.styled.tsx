import { makeStyles } from '@material-ui/core';
import { Issue } from '../../../Shared';
import { SPACE_SM } from '../../../Shared/cssConstants';

export const useIssueContainerStyles = makeStyles({
  title: {
    marginBottom: SPACE_SM,
  },
  container: {
    display: 'flex',
    flexWrap: ({ view }: { view?: Issue }) =>
      view === Issue.game ? 'nowrap' : 'wrap',
    flexDirection: ({ view }: { view?: Issue }) =>
      view === Issue.game ? 'column' : 'row',
  },
});
