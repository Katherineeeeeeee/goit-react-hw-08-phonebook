import { combineReducers } from 'redux';

import contactsReducer from './contacts/items/items-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
export default rootReducer;
