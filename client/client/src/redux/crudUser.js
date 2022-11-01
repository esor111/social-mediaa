import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cuser",
  initialState: {
    cuser: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getuserStart: (state) => {
      state.isFetching = true;
    },
    getuserSuccess: (state, action) => {
      state.isFetching = false;
      state.cuser = action.payload;
    },
    getuserfaliure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteuserStart: (state) => {
        state.isFetching = true;
      },
      deleteuserSuccess: (state, action) => {
        state.isFetching = false;
        state.cuser.filter((list) => list._id !== action.payload);
      },
      deleteuserfaliure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      updateuserStart: (state) => {
        state.isFetching = true;
      },
      updateuserSuccess: (state, action) => {
        state.isFetching = false;
        state.cuser.push(action.payload)
      },
      updateuserfaliure: (state) => {
        state.isFetching = false;
        state.error = true;
      },

  },
});

 export const { getuserStart, getuserSuccess, getuserfaliure,deleteuserStart, deleteuserSuccess, deleteuserfaliure,
  updateuserStart, updateuserSuccess, updateuserfaliure
} =
  userSlice.actions;
export default userSlice.reducer;
