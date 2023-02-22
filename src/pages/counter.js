import React, { useState } from 'react'

function Counter(){
  const [counterValue, setCounterValue] = useState(0);
  return (
    <>
    <span>{counterValue}</span>
    <button onClick={() => setCounterValue(counterValue + 1)}>+ Counter</button>
    <button onClick={() => setCounterValue(counterValue - 1)}>- Counter</button>
    
    </>
  );
}

export default Counter;