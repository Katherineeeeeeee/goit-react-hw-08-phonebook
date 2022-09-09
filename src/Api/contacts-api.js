import axios from 'axios';
// import { getContacts } from 'redux/contacts/contacts-selectors';

const instance = axios.create({
  baseURL: 'https://631997c78e51a64d2be78f7e.mockapi.io/contacts',
});

export const getContactsFromApi = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContactFromApi = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContactFromApi = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
