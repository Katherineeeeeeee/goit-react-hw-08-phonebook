import * as api from '../../Api/contacts-api';
// import { createOperation } from 'helpers/createOperation';
import { createAsyncThunk } from '@reduxjs/toolkit';

const isDublicate = ({ name, number }, contacts) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = number.toLowerCase();

  const result = contacts.find(item => {
    return (
      normalizedName === item.name.toLowerCase() &&
      normalizedNumber === item.number.toLowerCase()
    );
  });
  return Boolean(result);
};
//createAction
// export const fetchContacts = createOperation(
//   'contacts/fetch',
//   api.getContactsFromApi
// );

// export const addContactFromApi = createOperation(
//   'contacts/add',
//   api.addContactFromApi,
//   (data, { getState }) => {
//     const { contacts } = getState();
//     if (isDublicate(data, contacts.items)) {
//       alert(`${data.name} : ${data.number} is already in list`);
//       return false;
//     }
//   }
// );

// export const removeContactFromApi = createOperation(
//   'contacts/remove',
//   api.removeContactFromApi
// );

//2 variant, but not working
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetch',
//   async (_, { rejectWithValue }) => {
//     try {
//       const result = await api.getContactsFromApi();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const addContactFromApi = createAsyncThunk(
//   'contacts/add',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.addContactFromApi(data);
//       return result;
//     } catch (error) {
//       const { data, status } = error.response;
//       return rejectWithValue({ data, status });
//     }
//   },
//   {
//     condition: (data, { getState }) => {
//       const { contacts } = getState();
//       if (isDublicate(data, contacts.items)) {
//         alert(`${data.name} : ${data.number} is already in list`);
//         return false;
//       }
//     },
//   }
// );

// export const removeContactFromApi = createAsyncThunk(
//   'contacts/remove',
//   async (id, { rejectWithValue }) => {
//     try {
//       const result = await api.removeContactFromApi(id);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContactsFromApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactFromApi = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContactFromApi(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        alert(`${data.name} - ${data.number} is alredy exist`);
        return false;
      }
    },
  }
);

export const removeContactFromApi = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContactFromApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
