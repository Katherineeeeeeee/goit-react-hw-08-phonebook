import * as api from '../../Api/contacts-api';
import { createOperation } from 'helpers/createOperation';

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

export const fetchContacts = createOperation(
  'contacts/fetch',
  api.getContactsFromApi
);

export const addContactFromApi = createOperation(
  'contacts/add',
  api.addContactFromApi,
  (data, { getState }) => {
    const { contacts } = getState();
    if (isDublicate(data, contacts.items)) {
      alert(`${data.name} : ${data.number} is already in list`);
      return false;
    }
  }
);

export const removeContactFromApi = createOperation(
  'contacts/remove',
  api.removeContactFromApi
);
