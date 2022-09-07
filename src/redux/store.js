import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/items/items-reducer';
import filterReducer from './contacts/filter/filter-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
