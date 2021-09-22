import React, { useContext, useEffect } from 'react';
import {
  Dialog,
  Typography,
  DialogActions,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Container,
  LinearProgress,
  Modal,
} from '@material-ui/core';
import { Field, Form, Formik, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { useIssueDialogFormStyles } from './IssueDialogForm.styled';
import { checkLink, Priority } from '../../../Shared';
import { socket } from '../../../api/playersRequests';
import { AppContext } from '../../../App';
import { handleAddIssueSubmit } from '../../../api/issue';
import {
  IssueContext,
  RemoveIdEditIssueActionCreator,
  UpdateIssueActionCreator,
} from '../../../reducers/issue';

type Props = {
  open: boolean;
  isEditForm: boolean;
  handleClose: () => void;
};

export const IssueDialogForm: React.FC<Props> = ({
  open,
  handleClose,
  isEditForm,
}) => {
  const classes = useIssueDialogFormStyles();
  const { issueState, issueDispatch } = useContext(IssueContext);
  const { appState, dispatch } = useContext(AppContext);

  const index = issueState.issue.findIndex(
    (elem) => elem.id === issueState.editIssue.id
  );

  const defaultValue = {
    title: index === -1 ? '' : issueState.issue[index].title,
    link: index === -1 ? '' : issueState.issue[index].link,
    priority: Priority.low,
  };

  const priorityOption = (
    Object.keys(Priority) as (keyof typeof Priority)[]
  ).map((p, index) => (
    <MenuItem key={index} value={p}>
      {p}
    </MenuItem>
  ));

  useEffect(() => {
    socket.off('allIssues');
    socket.on('allIssues', (data) => {
      issueDispatch(UpdateIssueActionCreator(data));
    });
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <Container className={classes.container}>
        <Typography
          className={classes.title}
          component="h3"
          variant="h3"
          align="center"
        >
          {isEditForm ? 'Edit Issue' : 'Create Issue'}
        </Typography>
        <Formik
          initialValues={defaultValue}
          validate={(values) => {
            const errors: Partial<FormikValues> = {};
            if (!values.title) {
              errors.title = 'Required';
            }
            if (!values.link) {
              errors.link = 'Required';
            } else if (!checkLink.test(values.link)) {
              errors.link = 'Invalid link address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const payloadObject = {
              ...values,
              isDone: false,
              roomId: appState.currentPlayer.roomId,
            };
            handleAddIssueSubmit(payloadObject);
            handleClose();
            issueDispatch(RemoveIdEditIssueActionCreator());
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <Field
                autoFocus
                fullWidth
                component={TextField}
                type="text"
                label="Title"
                name="title"
                margin="dense"
                variant="outlined"
                disabled={isSubmitting}
                error={touched.title && Boolean(errors.title)}
                helperText="Please Enter title"
              />
              <Field
                fullWidth
                component={TextField}
                type="text"
                label="Link"
                name="link"
                margin="dense"
                variant="outlined"
                disabled={isSubmitting}
                error={touched.link && Boolean(errors.link)}
                helperText="Please Enter link"
              />
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="priority-label">Priority</InputLabel>
                <Field
                  component={Select}
                  name="priority"
                  inputProps={{
                    name: 'priority',
                    id: 'priority-label',
                  }}
                  disabled={isSubmitting}
                  defaultValue={Priority.low}
                >
                  {priorityOption}
                </Field>
              </FormControl>
              {isSubmitting && <LinearProgress />}
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isEditForm ? 'Edit' : 'Create'}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Container>
    </Dialog>
  );
};
