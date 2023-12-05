import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './features/testSlice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.test)

  useEffect(() => {
    dispatch(getData())
  },[])

  return (
    <>
      <h1>Hello There!!!</h1>
      <p>{JSON.stringify(state)} </p>
    </>
  )
}

export default App
