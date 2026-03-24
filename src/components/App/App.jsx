import initialContacts from "../../contacts.json";
import { useState } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const value = useSelector((state) => state.contacts.items);

  const addContact = {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: "Oleh",
      number: 660000000,
    },
  };
  const deleteContact = {
    type: "contacts/delContact",
    payload: "contactId",
  };

  // const addContact = (newContact) => {
  //   const contactWithId = {
  //     ...newContact,
  //     id: nanoid(),
  //   };

  //   setContacts((prev) => [...prev, contactWithId]);
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => {
  //       return contact.id !== contactId;
  //     });
  //   });
  // };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
}
