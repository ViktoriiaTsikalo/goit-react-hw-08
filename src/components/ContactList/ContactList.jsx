import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {error && <h2>Server is dead...</h2>}
      {isLoading && <h2>Loading...</h2>}
      <ul className={s.contacts}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              data={contact}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
