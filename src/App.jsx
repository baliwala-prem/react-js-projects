import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [showpassword, setshowpassword] = useState(false)

  function togglePassword()
  {
    setshowpassword(!showpassword);
  }
  return (
    <>
      <div class="password-box">
        <input type={showpassword ? "text": "password"} id="password" placeholder="Enter Password" />
        <span onClick={togglePassword}>{showpassword ? "Hide":"Show"}</span>
      </div>
    </>
  )
}

export default App
