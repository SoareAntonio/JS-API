import React, { useState } from 'react'

export function Counter2() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const reset = () => setCount(0)

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement} disabled={count === 0}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
