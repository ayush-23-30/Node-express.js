import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,  incrementByAmount,  reset } from './feature/CounterSlice';

function App() {
  // const [count , setCount] = useState(0) not this way we will use UseSelecor; 
  const [amount , setAmount] = useState(0);

  const dispatch = useDispatch(); 

  const count = useSelector((state) => state.counter.value);
  // state ke ander name - counter - uske ander value hai vo dedo

  const handleDecrement = ()=>{
    // actions hoga dispatch se 
    dispatch(decrement()); 
  }
  const handleIncrement = ()=>{
    dispatch(increment());
  }
  const handleReset = ()=>{
    dispatch(reset()); 
  }
  const handleByamount = ()=>{
    dispatch(incrementByAmount(amount));  // payload data is sended in argument form-- 
  }


  return (
    <div className='h-screen w-full gap-2 flex-wrap flex items-center justify-center bg-slate-500'>
      <button className='text-3xl flex items-center justify-center bg-white txt-center rounded-full w-6 h-6 ' onClick={handleIncrement}> + </button>
      <p className='text-2xl '> Count: {count} </p>
      <button className='text-3xl bg-white flex items-center justify-center  txt-center rounded-full w-6 h-6' onClick={handleDecrement}> - </button>
      <button className='text-3xl bg-white flex items-center justify-center  txt-center rounded-full w-20 h-10' onClick={handleReset}> Reset </button>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button className='text-xl bg-white flex items-center justify-center  txt-center rounded-full' onClick={handleByamount}> Add amount </button>
    </div>
  )
}

export default App
