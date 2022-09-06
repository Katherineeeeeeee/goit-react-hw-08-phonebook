import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});
export const removeContactAction = createAction('contacts/remove');
