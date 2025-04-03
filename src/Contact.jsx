import s from "./Contact.module.css";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={s.contactBox}>
      <ul className={s.contactText}>
        <li>👤{name}</li>
        <li>📞{number}</li>
      </ul>
      <button className={s.delete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
