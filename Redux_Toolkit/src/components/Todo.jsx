import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from '../features/todos/todoSlice'
import { Todos } from './Todos'

const Todo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleAdd = (e) => {
      e.preventDefault();
      dispatch(addTodo(input))
      setInput('')
    } 

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <form
          className="p-3 border border-black outline-none appearance-none"
          onSubmit={handleAdd}
        >
          <input
            className="outline-none"
            type="text"
            value={input}
            placeholder="Add"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-5 py-2 rounded-md"
          >
            Add
          </button>
        </form>
      </div>
      <br />
      <div className="flex items-center justify-center">
        <Todos />
      </div>
    </>
  );
}

export default Todo