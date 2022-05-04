import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'response',
  initialState: {
    negativeQuantity: 0,
    notAvailableQuantity: 0,
    positiveQuantity: 0
  },
  reducers: {
    setResponse(state, { payload: { positiveQuantity, negativeQuantity, notAvailableQuantity } }) {
      return { ...state, positiveQuantity, negativeQuantity, notAvailableQuantity }
    }
  }
})

export const { setResponse } = slice.actions

export default slice.reducer
