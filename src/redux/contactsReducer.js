import { combineReducers } from 'redux';

import itemsReducer from './contacts/items/items-reducer';
import filterReducer from './contacts/filter/filter-reducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
