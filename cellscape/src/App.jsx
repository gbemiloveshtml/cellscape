
import React from 'react'
import { useState, Suspense } from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import About from './pages/static/about/about';
import Contact from './pages/static/contact/contact'
import Navbar from './pages/static/navbar/navbar'
import Home from './pages/home';
import '@mantine/core/styles.css';



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <Navbar />

        
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />
   </Routes>


    </div>
   
  )
}

export default App


/* */