import React from 'react'
import * as THREE from 'three';
import { useState, Suspense } from 'react'
import { Routes, Route, Router, BrowserRouter} from "react-router-dom"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import RedBloodCell from './assets/Redbloodcell';
import About from './pages/static/navbar/about';

import Navbar from './pages/static/navbar/navbar'
import Contact from './pages/static/navbar/contact';


const App = () => {
  const [count, setCount ] = useState(0)
  return (
    <div className = "container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>




      <Canvas>
          <RedBloodCell />
      
      </Canvas>

      
 
    </div>
  )
}

export default App
