import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// run by using npm run dev in terminal
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <App/> 
    </BrowserRouter>
  </StrictMode>,
);
