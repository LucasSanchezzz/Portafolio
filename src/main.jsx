import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter className="justify-start content-start "> 
      <NavBar/>
      </BrowserRouter>,
)
