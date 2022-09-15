import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactFromApi,
  removeContactFromApi,
} from './contacts-operations';

import { pendingCallback, rejectedCallback } from '../../helpers/exportFunc';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pendingCallback,
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: rejectedCallback,

    [addContactFromApi.pending]: pendingCallback,
    [addContactFromApi.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContactFromApi.rejected]: rejectedCallback,

    [removeContactFromApi.pending]: pendingCallback,
    [removeContactFromApi.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContactFromApi.rejected]: rejectedCallback,
  },
});

export default contactsSlice.reducer;
