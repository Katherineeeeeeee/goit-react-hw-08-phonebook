import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  addContactFromApi,
  removeContactFromApi,
} from 'redux/contacts/contacts-operations';

import { setFilter } from 'redux/filter/filter-actions';
import {
  getContacts,
  getFilterContacts,
  getState,
} from '../redux/contacts/contacts-selectors';

import { getFilter } from 'redux/filter/filter-selectors';

import ContactForm from './Phonebook/Form-elements/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/Form-elements/ContactList';

import s from './Phonebook/Phonebook.module.css';

const App = () => {
  const contacts = useSelector(getContacts);
  const { loading } = useSelector(getState); //must be 'error' in const { loading, error }

  const filter = useSelector(getFilter);
  const filtredContacts = getFilterContacts(contacts, filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContact = data => {
    dispatch(addContactFromApi(data));
  };

  const removeContact = id => {
    dispatch(removeContactFromApi(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={contacts} />

      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      {!loading && contacts.length > 0 && (
        <ContactList contacts={filtredContacts} removeContact={removeContact} />
      )}
      {loading && <p>...Loading</p>}
    </div>
  );
};

export default App;
