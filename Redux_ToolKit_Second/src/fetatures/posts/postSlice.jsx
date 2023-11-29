import {createSlice, nanoid} from '@reduxjs/toolkit';
import { sub } from 'date-fns'

const initialState = [
  {
    id: 1,
    title: "Redux_Tutorial",
    content:
      "Learning the Redux Toolkit is a rewarding journey for developers aiming to streamline state management in their React applications. Redux Toolkit, an official package endorsed by the Redux team, simplifies the traditionally verbose Redux setup.",
  },
  {
    id: 2,
    title: "Slices...",
    content:
      "Slices are a fundamental concept in the Redux Toolkit, serving as modular units that encapsulate reducer logic and related actions in a concise and organized manner. A slice essentially represents a piece of the overall Redux state and includes a reducer function and a set of action creators.",
  },
];


const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded:{
      reducer(state, action){
        state.push(action.payload)
      },
      prepare(title, content, userId){
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new  Date().toISOString(),
            userId
          },
        };
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts
export const {postAdded} = postSlice.actions
export default postSlice.reducer