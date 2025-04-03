import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import initialContacts from "../contactsData.json";

const LOCAL_STORAGE_KEY = "contacts";

function App() {
  const [contactsData, setContactsData] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactsData));
  }, [contactsData]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContactsData((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContactsData((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contactsData={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
