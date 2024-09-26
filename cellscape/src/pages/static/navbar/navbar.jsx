import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className = "navbar">
        <img src="src\assets\logo2.png"  alt="CellScape Logo" className='logo'/>
        <ul>
            <li>About</li>
            <li> Contact</li>
        </ul>
        
      
    </div>
  )
}

export default Navbar
