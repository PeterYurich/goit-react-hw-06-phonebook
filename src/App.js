import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import css from './components/App.module.scss'

const App = () => {

  const [contacts, setContacts] = useState(() =>
    (JSON.parse(localStorage.getItem("contacts")) ?? []));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const controlFilter = evt => {
    setFilter(evt.target.value)
  };

  const addContact = ({ name, phone }) => {
    const contactItem = {
      id: nanoid(),
      name,
      phone,
    };

    const repeatedName = contacts.find(person => {
      return person.name.toLowerCase() === name.toLowerCase()
    })

    !repeatedName ?
      setContacts(prev => ([contactItem, ...prev]))
      : alert(`${name} is already in contacts`)
  };

  const findContact = () => {
    const normalizedFiler = filter.toLowerCase();

    return contacts.filter(person =>
      person.name.toLowerCase().includes(normalizedFiler)
    );
  };

  const deleteContact = (contactIdToDelete) => {
    const leftContacts = contacts.filter(contactItem => (
      contactItem.id !== contactIdToDelete
    ))
    setContacts(leftContacts)
  }

  let toRender = contacts
  if (findContact()) {
    toRender = findContact()
  }

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} ></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={controlFilter}></Filter>
      <ContactList toRender={toRender} deleteContact={deleteContact}></ContactList>
    </div>
  )

}

export default App
