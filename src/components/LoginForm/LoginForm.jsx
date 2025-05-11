import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Stack,
} from "@mui/material";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Некоректна електронна адреса")
    .required("Електронна адреса є обов’язковою"),
  password: Yup.string()
    .min(6, "Пароль має містити щонайменше 6 символів")
    .required("Пароль є обов’язковим"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.setSubmitting(false);
  };

  return (
    <Container maxWidth="xs">
      <Box className={s.formWrapper}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Вхід
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form>
              <Stack spacing={2}>
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
                  disabled={isSubmitting}
                >
                  Увійти
                </Button>

                <Typography variant="body2" className={s.linkText}>
                  Не маєш акаунту?{" "}
                  <Link to="/register" className={s.link}>
                    Зареєструйся!
                  </Link>
                </Typography>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginForm;
