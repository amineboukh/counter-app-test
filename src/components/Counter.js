import React, { useState } from 'react';

function Counter() {
   const [counter, setCounter] = useState(0);
   const [initialCount, setInitialCount] = useState(0);
   
   const handleReset = () => {
      setCounter(initialCount);
   };

   const handleDecrement = () => {
    if (counter > 0) {
        setCounter(counter - 1);
    }
   };

   return (
      <div className='counter-container '>
         <button onClick={() => setCounter(counter + 1)}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
         <button onClick={handleReset}>Reset</button>
         <p>Count: {counter}</p>
      </div>
   );
}

export default Counter; 