import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'response',
  initialState: {
    negativeQuantity: 0,
    notAvailableQuantity: 0,
    positiveQuantity: 0
  },
  reducers: {
    setResponse(state, { payload }) {
      return { ...state, ...payload }
    }
  }
})

export const { setResponse } = slice.actions

export default slice.reducer
