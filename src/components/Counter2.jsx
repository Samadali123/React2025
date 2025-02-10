import React, { useState } from 'react'

const Counter2 = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter2