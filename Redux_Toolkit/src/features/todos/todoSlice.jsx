import {createSlice, nanoid} from '@reduxjs/toolkit';

let initialState = {
    todos: [{id: 1, text: 'hello'}],
};

// console.log(initalState)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((data) => data.id !== action.payload)
        }
    }
}) 

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer