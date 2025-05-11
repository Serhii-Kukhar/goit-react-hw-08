import { useDispatch } from "react-redux";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.itemBox}>
      <div className={s.contactInfo}>
        <div className={s.nameBox}>
          <FaUser className={s.iconName} />
          <span className={s.text}>{name}</span>
        </div>
        <div className={s.phoneBox}>
          <BsFillTelephoneFill className={s.iconNumber} />
          <span className={s.text}>{number}</span>
        </div>
      </div>
      <Tooltip title="Видалити">
        <IconButton onClick={handleDelete} color="error">
          <Delete />
        </IconButton>
      </Tooltip>
    </li>
  );
};

export default Contact;
