import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Header from "./component/Header/Header.jsx"
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
