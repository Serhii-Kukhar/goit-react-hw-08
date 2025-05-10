import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^\+?\d+$/, "Only digits!")
    .min(3, "Too short!")
    .max(15, "Too long!")
    .required("Phone is required"),
});

const initialValue = {
  username: "",
  phone: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.phone,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.inputContainer}>
          <label className={s.label} htmlFor="username">
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="username"
            placeholder="Julia Baker"
          />
          <ErrorMessage
            className={s.errorMessage}
            name="username"
            component="span"
          />
        </div>

        <div className={s.inputContainer}>
          <label className={s.label} htmlFor="phone">
            Number
          </label>
          <Field
            className={s.input}
            type="tel"
            name="phone"
            placeholder="777-77-77"
          />
          <ErrorMessage
            className={s.errorMessage}
            name="phone"
            component="span"
          />
        </div>

        <button className={s.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
