import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const handleStart = () => {
    if (timeRef.current) return; // Prevent starting a new interval if one is already running
    timeRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null; // Clear the reference
    }
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      handleStop();
    };
  }, []);

  return (
    <div className='h-screen w-full gap-2 flex items-center justify-center flex-col bg-gray-400'>
      <h1 className='text-2xl font-bold'>Stop Watch: {time} sec</h1>
      <button className='bg-black text-xl text-white rounded-lg w-14' onClick={handleStart}>Start</button>
      <button className='bg-black text-xl text-white rounded-lg w-14' onClick={handleStop}>Stop</button>
      <button className='bg-black text-xl text-white rounded-lg w-14' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
