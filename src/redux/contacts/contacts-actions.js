import { nanoid } from 'nanoid';
import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

export const addContactAction = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      ...payload,
      id: nanoid(),
    },
  };
};

export const removeContactAction = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};
