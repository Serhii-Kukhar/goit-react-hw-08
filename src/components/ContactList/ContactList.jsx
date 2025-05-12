import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {isLoading && !error && <Loader />}
      <div className={s.contactsBox}>
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
