import React from "react";
import './navbar.css';

const Navbar = () =>{
    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
                <img className="logo" src="src\assets\logo2.png"></img>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                <li>
                    <a href="/about.jsx">About</a>
                </li>
                <li>
                    <a href="/contact.jsx">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
        
        
        
        </>



    )
}

export default Navbar