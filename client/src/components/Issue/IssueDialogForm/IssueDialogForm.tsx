import React, { useState } from 'react';
import {
  Dialog,
  Typography,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Container,
} from '@material-ui/core';
import { PreloaderForForm } from '../../PreloaderForForm';
import { useFormik } from 'formik';
import { useIssueDialogFormStyles } from './IssueDialogForm.styled';
import { Priority } from '../../../Shared/enums';

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
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      link: '',
      position: 'low',
    },
    onSubmit: (values) => {
      setIsLoading(true);
      const payloadObject = {
        ...values,
      };
    },
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
        {isLoading ? (
          <PreloaderForForm />
        ) : (
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                variant="outlined"
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
              <TextField
                margin="dense"
                id="link"
                label="Link"
                type="text"
                variant="outlined"
                fullWidth
                value={formik.values.link}
                onChange={formik.handleChange}
                error={formik.touched.link && Boolean(formik.errors.link)}
                helperText={formik.touched.link && formik.errors.link}
              />
              <FormControl margin="normal" fullWidth>
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select
                  labelId="priority-label"
                  defaultValue={Priority.low}
                  id="priority"
                >
                  <MenuItem value={Priority.low}>{Priority.low}</MenuItem>
                  <MenuItem value={Priority.middle}>{Priority.middle}</MenuItem>
                  <MenuItem value={Priority.hight}>{Priority.hight}</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="contained" type="submit">
                {isEditForm ? 'Edit' : 'Create'}
              </Button>
              <Button
                onClick={handleClose}
                color="secondary"
                variant="contained"
              >
                Cancel
              </Button>
            </DialogActions>
          </form>
        )}
      </Container>
    </Dialog>
  );
};
