import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../fetatures/posts/postSlice'
import userReducer from '../fetatures/users/usersSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer
  },
});