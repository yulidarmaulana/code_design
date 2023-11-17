import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import App from './App.jsx'
import Content from './components/Content.jsx'
import Blog from './components/Blog.jsx'
import Subscribe from './components/Subscribe.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <App />
    <Content />
    <Blog />
    <Subscribe />
    <Footer />
  </React.StrictMode>,
)
