import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'response',
  initialState: {
    isSubmit: false
  },
  reducers: {
    setSubmit(state, { payload }) {
      return { ...state, isSubmit: payload }
    }
  }
})

export const { setSubmit } = slice.actions

export default slice.reducer
