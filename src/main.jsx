import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Style/style.css'
import 'animate.css';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
createRoot(document.getElementById('root')).render(
  
  <BrowserRouter >
  <StrictMode>
    <Layout />
  </StrictMode>
  </BrowserRouter>
)
