import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Dress from './pages/dress.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dress />
  </StrictMode>,
)
