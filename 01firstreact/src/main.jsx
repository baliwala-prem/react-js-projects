import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).
render(
  <StrictMode>
    <App name="Baliwala Prem" description="My name is Prem" age={22}/>
    <App name="Patel Hetvi" description="My name is Hetvi" age={22}/>
    <App name="Chevil Pavan" description="My name is Pavan" age={21}/>
    <App name="chana Vikas" description="My name is Vikas" age={25}/>

    
  </StrictMode>,
)
