import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [count,setcount]=useState(0);

  function addvalue()
  {
    if(count<20)
    {
      setcount(count+1);
    }
  }
  function removevalue()
  {
    if(count>0)
    {
      setcount(count-1);
      
    }
  }

  function resetvalue()
  {
    setcount(0);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addvalue}>Increase</button>
      <button onClick={removevalue}>Decrement</button>
      <button onClick={resetvalue}>Reset</button>
      
    </>
  )
}

export default App
