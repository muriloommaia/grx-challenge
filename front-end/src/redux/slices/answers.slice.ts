import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'actualPage',
  initialState: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: ''
  },
  reducers: {
    setAnswer(state, { payload: { question, answer } }) {
      return { ...state, [`answer${question}`]: answer }
    }
  }
})

export const { setAnswer } = slice.actions

export default slice.reducer
