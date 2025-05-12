import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Занадто коротке імʼя!")
    .max(50, "Занадто довге імʼя!")
    .required("Імʼя є обовʼязковим"),
  phone: Yup.string()
    .matches(/^\+?\d+$/, "Лише цифри!")
    .min(3, "Занадто короткий номер!")
    .max(15, "Занадто довгий номер!")
    .required("Номер телефону є обовʼязковим"),
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
        <Field
          as={TextField}
          id="username"
          label="Імʼя:"
          variant="standard"
          className={s.input}
          type="text"
          name="username"
        />
        <ErrorMessage
          className={s.errorMessage}
          name="username"
          component="span"
        />
        <Field
          as={TextField}
          id="phone"
          label="Номер телефону:"
          variant="standard"
          type="tel"
          name="phone"
        />
        <ErrorMessage
          className={s.errorMessage}
          name="phone"
          component="span"
        />
        <div className={s.button}>
          {/* <Button type="submit" variant="outlined" size="large" color="success">
            Добавити
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            type="submit"
          >
            Додати контакт
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
