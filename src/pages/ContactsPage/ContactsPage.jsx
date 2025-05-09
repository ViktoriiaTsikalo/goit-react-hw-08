import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

export const ContactsPage = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};
