import * as api from '../../Api/contacts-api';

import actions from './contacts-actions';

export const isDublicate = ({ name, number }, contacts) => {
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

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await api.getContactsFromApi();
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      const { message, response } = error;
      const errorData = {
        message,
        status: response.status,
      };
      dispatch(actions.fetchContactsError(errorData));
    }
  };
  return func;
};

export const addContactAction = data => {
  const func = async (dispatch, getState) => {
    const { contacts } = getState();
    if (isDublicate(data, contacts.items)) {
      return alert(`${data.name} : ${data.number} is already in list`);
    }

    try {
      dispatch(actions.addContactFromApiLoading());
      const result = await api.addContactFromApi(data);
      dispatch(actions.addContactFromApiSuccess(result));
    } catch (error) {
      dispatch(actions.addContactFromApiError(error.message));
    }
  };
  return func;
};

export const removeContactAction = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.removeContactFromApiLoading());
      await api.removeContactFromApi(id);
      dispatch(actions.removeContactFromApiSuccess(id));
    } catch (error) {
      dispatch(actions.removeContactFromApiError(error.message));
    }
  };
  return func;
};
