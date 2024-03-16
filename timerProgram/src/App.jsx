import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [time, setTime] = useState(5);
  const timeRef = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (on && time > 0) {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timeRef.current);
    }
    return () => clearInterval(timeRef.current);
  }, [on, time]);

  useEffect(() => {
    if (time === 0) {
      setOn(false);
    }
  }, [time]);

  const handleStart = () => {
    setOn(true);
  };

  const handleReset = () => {
    setTime(5);
    setOn(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl">Timer</h1>
      <div className="flex flex-col items-center gap-y-3 h-36">
        <div className="text-5xl">Display: {time}</div>
        {!on && (
          <button onClick={handleStart} className="text-3xl px-4 py-2 border-4 border-black rounded-md">Start!</button>
        )}
        {time === 0 && (
          <div className='flex flex-col gap-y-1 items-center justify-center'>
            <div className="text-2xl">Time Completed!</div>
            <button onClick={handleReset} className="text-2xl px-4 py-2 border-4 border-black rounded-md">Reset</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
