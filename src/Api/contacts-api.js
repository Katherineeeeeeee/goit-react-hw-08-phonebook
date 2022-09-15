import instance from './auth';

export const getContactsFromApi = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContactFromApi = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContactFromApi = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);

  return data;
};
