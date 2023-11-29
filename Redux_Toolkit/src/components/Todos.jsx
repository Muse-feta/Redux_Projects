import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

export const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
      {todos.map((data) => (
        <div className='flex gap-x-3'>
         
          <p>{data.text}</p>
          <button className=' bg-red-500 rounded-lg px-4 py-2 m-4' onClick={() => dispatch(removeTodo(data.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}
