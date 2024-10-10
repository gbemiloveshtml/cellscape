import React from 'react';
import { NavLink, Route, Link, useHref} from 'react-router-dom';
import About from '../about/about';
import Contact from '../contact/contact'


import './Navbar.css';



const Navbar = () => {
  return (
    <div className = "navbar">
      <Link to="http://localhost:5173/"><img src="src\assets\logo2.png"  alt="CellScape Logo" className='logo' /></Link>
        <nav>
          <ul>
              <li>  
                <NavLink to="/"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
                
                >Home</NavLink>
                <NavLink to ="/about" >About</NavLink>
                <NavLink to ="/contact"  >Contact</NavLink>
              </li>
          </ul>
        </nav>
       
      
    </div>
  )
}

export default Navbar
