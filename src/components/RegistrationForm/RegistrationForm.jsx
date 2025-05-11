import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Stack,
} from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Ім’я має містити щонайменше 2 символи")
    .required("Ім’я є обов’язковим"),
  email: Yup.string()
    .email("Некоректна електронна адреса")
    .required("Електронна адреса є обов’язковою"),
  password: Yup.string()
    .min(6, "Пароль має містити щонайменше 6 символів")
    .required("Пароль є обов’язковим"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Container maxWidth="xs">
      <Box className={s.formContainer}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Реєстрація
        </Typography>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Ім’я"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Електронна адреса"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Пароль"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Зареєструватися
                </Button>

                <Typography variant="body2" className={s.linkText}>
                  Вже маєш акаунт? <Link to="/login">Увійти!</Link>
                </Typography>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
