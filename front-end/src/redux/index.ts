import { configureStore } from '@reduxjs/toolkit'
import answersSlice from './slices/answers.slice'
import responseSlice from './slices/response.slice'
import submitSlice from './slices/submit.slice'

export const store = configureStore({
  reducer: {
    answers: answersSlice,
    response: responseSlice,
    submit: submitSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
