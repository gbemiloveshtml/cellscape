import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import Contact from './contact'
import './Navbar.css';



const Navbar = () => {
  return (
    <div className = "navbar">

        <img src="src\assets\logo2.png"  alt="CellScape Logo" className='logo' />
       
        <ul>
            <li>  
              <Link to ="/about">About</Link>
              <Link to ="/contact">Contact</Link>
            </li>
        </ul>
        
      
    </div>
  )
}

export default Navbar
