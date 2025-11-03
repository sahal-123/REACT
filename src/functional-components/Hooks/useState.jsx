import React from 'react'

const useState = () => {
    const [count, setCount] =useState(0); // intial value
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1 )}>increment</button>
    </div>
  )
}

export default useState
fce









// state is an internal data store that belong to a specific --
// -- components,and it can be changed over time