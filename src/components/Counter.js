import React, { useState } from 'react'

export const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count > 0){
      setCount(count -1);
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <div className='buttons-container'>
        <button className='increment-button' onClick={increment}>Increment</button>
        <button className='decrement-button' onClick={decrement}>Decrement</button>
      </div>
      {count >= 10 &&
        <div className='counter-message'><label>Count is  too hight!</label></div>
      }
    </div>
  )
}
