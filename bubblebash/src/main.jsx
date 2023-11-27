import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import App from './App.jsx'
import Service from './Service.jsx'
import Portofolio from './Portofolio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Service />
    <Portofolio />
  </React.StrictMode>,
)
