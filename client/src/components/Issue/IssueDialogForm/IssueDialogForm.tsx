import React from 'react';
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
} from '@material-ui/core';
import { Field, Form, Formik, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { useIssueDialogFormStyles } from './IssueDialogForm.styled';
import { checkLink, IssueType, Priority } from '../../../Shared';

type Props = {
  open: boolean;
  isEditForm: boolean;
  issues: IssueType[];
  idEditIssue: string;
  handleClose: () => void;
};

export const IssueDialogForm: React.FC<Props> = ({
  open,
  handleClose,
  isEditForm,
  issues,
  idEditIssue,
}) => {
  const classes = useIssueDialogFormStyles();
  const priorityOption = (
    Object.keys(Priority) as (keyof typeof Priority)[]
  ).map((p, index) => (
    <MenuItem key={index} value={p}>
      {p}
    </MenuItem>
  ));

  const index = issues.findIndex((elem) => elem.id === idEditIssue);

  const defaultValue = {
    title: index === -1 ? '' : issues[index].title,
    link: index === -1 ? '' : issues[index].link,
    priority: Priority.low,
  };

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
            setSubmitting(false);
            const payloadObject = {
              ...values,
            };
            console.log(payloadObject);
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
