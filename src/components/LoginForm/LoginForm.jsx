import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import { useState } from "react";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleSubmit = (values, actions) => {
    setError(null);

    dispatch(login(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
      })
      .catch(() => {
        setError("Login failed. Please try again.");
        actions.setSubmitting(false);
      });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 6 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Log In
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, handleChange }) => (
          <Form>
            <Box mb={2}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={<ErrorMessage name="email" />}
              />
            </Box>

            <Box mb={2}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={<ErrorMessage name="password" />}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
