import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import { SyncLoader } from "react-spinners";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {isLoading && !error && <SyncLoader />}
      <div className={s.listBox}>
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
