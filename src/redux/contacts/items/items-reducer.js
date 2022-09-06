import { createReducer } from '@reduxjs/toolkit';
import { addContactAction, removeContactAction } from './items-actions';

const itemsReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContactAction.type]: (store, { payload }) => {
      store.push(payload);
    },
    [removeContactAction]: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  }
);

export default itemsReducer;
