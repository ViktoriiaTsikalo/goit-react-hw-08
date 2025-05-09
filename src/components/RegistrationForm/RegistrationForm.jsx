import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { useState } from "react";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleSubmit = (values, actions) => {
    setError(null);

    dispatch(register(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
      })
      .catch(() => {
        setError("Registration failed. Please try again.");
        actions.setSubmitting(false);
      });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 6 }}>
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Register
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, handleChange }) => (
          <Form>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Username"
                name="name"
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={<ErrorMessage name="name" />}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={<ErrorMessage name="email" />}
              />
            </Box>

            <Box mb={3}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
