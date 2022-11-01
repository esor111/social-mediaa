import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice ({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    loginStart: state => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginfaliure: state => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: state => {
      state.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
    },
    logoutFaliure: state => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginfaliure,
  logoutStart,
  logoutSuccess,
  logoutFaliure,
} = userSlice.actions;
export default userSlice.reducer;
