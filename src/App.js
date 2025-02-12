import React, { useState } from 'react'

const App = () => {

  const[input,setInput] = useState(0);

  return (
    <div>
      <h1>{input}</h1>
      <button onClick={()=>setInput(input+1)}>+</button>
      <button onClick={()=>setInput(input-1)}>-</button>
    </div>
  )
}

export default App
