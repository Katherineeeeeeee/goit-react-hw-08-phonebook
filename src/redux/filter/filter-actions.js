import { SET_FILTER } from './filter-types';

export const filterAction = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
