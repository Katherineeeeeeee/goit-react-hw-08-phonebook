import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, getCurrentUser } from './auth-operations';

const initialState = {
  user: {},
  token: null,
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signup.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [login.pending]: store => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [login.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [logout.pending]: store => ({ ...store, loading: true, error: null }),
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),

    [getCurrentUser.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),

    [getCurrentUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [getCurrentUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default authSlice.reducer;
