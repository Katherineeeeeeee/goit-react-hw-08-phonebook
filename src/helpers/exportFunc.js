export const pendingCallback = store => {
  store.loading = true;
  store.error = null;
};

export const rejectedCallback = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};
