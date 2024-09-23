import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BioProvider } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <BioProvider>
    <App />
    </BioProvider>
    </BrowserRouter>
  </StrictMode>,
)
