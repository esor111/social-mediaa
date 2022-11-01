import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice ({
  name: 'post',
  initialState: {
    post: '',
  },
  reducers: {
    postIdSuccess: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const {postIdSuccess} = postSlice.actions;
export default postSlice.reducer;