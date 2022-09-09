import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const itemsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactFromApiSuccess]: (store, { payload }) => [
    ...store,
    payload,
  ],

  [actions.removeContactFromApiSuccess]: (store, { payload }) => {
    store.filter(item => item.id !== payload);
  },
});

const loadingReducer = createReducer(false, {
  //fetch
  [actions.fetchContactsLoading]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  //add
  [actions.addContactFromApiLoading]: () => true,
  [actions.addContactFromApiSuccess]: () => false,
  [actions.addContactFromApiError]: () => false,
  //remove
  [actions.removeContactFromApiLoading]: () => true,
  [actions.removeContactFromApiSuccess]: () => false,
  [actions.removeContactFromApiError]: () => false,
});

const errorReducer = createReducer(null, {
  //fetch
  [actions.fetchContactsLoading]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,
  //add
  [actions.addContactFromApiLoading]: () => null,
  [actions.addContactFromApiError]: (_, { payload }) => payload,
  //remove
  [actions.removeContactFromApiLoading]: () => null,
  [actions.removeContactFromApiError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default contactsReducer;
