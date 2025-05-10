import { useDispatch } from "react-redux";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.itemBox}>
      <div className={s.contactInfo}>
        <div className={s.nameBox}>
          <FaUser className={s.icon} />
          <span>{name}</span>
        </div>
        <div className={s.phoneBox}>
          <BsFillTelephoneFill className={s.icon} />
          <span>{number}</span>
        </div>
      </div>
      <button className={s.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
