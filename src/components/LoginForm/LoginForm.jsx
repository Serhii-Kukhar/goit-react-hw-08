import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <div>
          <Link to="/register">You don't have account? Sign up!</Link>
        </div>
        <br />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
