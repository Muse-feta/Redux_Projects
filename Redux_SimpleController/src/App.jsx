import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counterSlice'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  const [value, setValue] = useState(0)
  const addValue = Number(value) || 0

  const resetValues = () => {
    dispatch(reset())
    setValue(0)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>add</button>
      <button onClick={resetValues}>Reset</button>
    </>
  );
}

export default App
