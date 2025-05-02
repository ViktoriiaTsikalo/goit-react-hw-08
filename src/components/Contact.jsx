import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contactBox}>
      <ul className={s.contactText}>
        <li>👤{name}</li>
        <li>📞{number}</li>
      </ul>
      <button className={s.delete} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
