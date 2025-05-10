// RegistrationForm.jsx
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name:
          <Field type="name" name="name" placeholder="Name" />
        </label>
        <br />
        <label>
          Email:
          <Field type="email" name="email" placeholder="Email" />
        </label>
        <br />
        <label>
          Password:
          <Field type="password" name="password" placeholder="Password" />
        </label>
        <div>
          <Link to="/login">You already have account?Sign in!</Link>
        </div>
        <br />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
