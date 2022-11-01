import { createSlice } from '@reduxjs/toolkit'

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comment: [],
    isfetching: false,
    error: false
  },

  reducers: {
    getCommentStart: (state, action) => {
      state.isfetching = true
    },
    getAllcommentSuccess: (state, action) => {
      state.comment = action.payload

      state.isfetching = false
    },
    getAllcommentFaliure: (state, action) => {
      state.error = true
    }
  }
})

export const {
  getCommentStart,
  getAllcommentSuccess,
  getAllcommentFaliure
} = commentSlice.actions
export default commentSlice.reducer
