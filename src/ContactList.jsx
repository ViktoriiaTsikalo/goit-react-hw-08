import Contact from "./Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul className={s.contacts}>
      {contactsData.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
