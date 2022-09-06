//redux
import { useSelector, useDispatch } from 'react-redux';
import {
  addContactAction,
  removeContactAction,
} from '../redux/contacts/items/items-actions';
import { filterAction } from 'redux/contacts/filter/filter-actions';
import {
  getFilterContacts,
  getContacts,
} from '../redux/contacts/items/items-selectors';
import { getFilter } from 'redux/contacts/filter/filter-selectors';

import ContactForm from './Phonebook/Form-elements/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/Form-elements/ContactList';

import s from './Phonebook/Phonebook.module.css';

const isDublicate = ({ name, number }, contacts) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = number.toLowerCase();

  const result = contacts.find(item => {
    return (
      normalizedName === item.name.toLowerCase() &&
      normalizedNumber === item.number.toLowerCase()
    );
  });
  return Boolean(result);
};

const App = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const filtredContacts = getFilterContacts(contacts, filter);
  const dispatch = useDispatch();

  const addContact = data => {
    if (isDublicate(data, contacts)) {
      return alert(`${data.name} : ${data.number} is already in list`);
    }
    dispatch(addContactAction(data));
  };

  const removeContact = id => {
    dispatch(removeContactAction(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(filterAction(target.value));
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={contacts} />

      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={filtredContacts} removeContact={removeContact} />
    </div>
  );
};

export default App;
