import { createAction } from '@reduxjs/toolkit';

const fetchContactsLoading = createAction('contacts/fetch/loading'); //pending
const fetchContactsSuccess = createAction('contacts/fetch/success'); // fulfiled
const fetchContactsError = createAction('contacts/fetch/error'); // rejected

const addContactFromApiLoading = createAction('contacts/add/loading');
const addContactFromApiSuccess = createAction('contacts/add/success');
const addContactFromApiError = createAction('contacts/add/error');

const removeContactFromApiLoading = createAction('contacts/remove/loading');
const removeContactFromApiSuccess = createAction('contacts/remove/success');
const removeContactFromApiError = createAction('contacts/remove/error');

const actions = {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactFromApiLoading,
  addContactFromApiSuccess,
  addContactFromApiError,
  removeContactFromApiLoading,
  removeContactFromApiSuccess,
  removeContactFromApiError,
};

export default actions;
