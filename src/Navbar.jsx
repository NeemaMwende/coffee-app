import React, { useState } from 'react';
import './Navbar.css';
import angel from "../src/Images/angel1.jpeg";
// import { Link } from 'react-router-dom';

const Navbar = () => {
 
    return (
            <>
                {/* <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> */}

                <nav className='nav-wrapper'>
                    <div className='nav-content'>
                        <img className='logo' src={angel} alt='' />
                          
                        <ul>
                            <li id='home'><a className="menu-item">Home</a></li>
                            <li id='products'><a className="menu-item">Products</a></li>
                            <li id='services'><a className="menu-item">Services</a></li>
                            <li id='testimonials'><a className="menu-item">Testimonials</a></li>
                            <li id='contact'><a className="menu-item">Contact Us</a></li>

                         <div className='btns'>
                            <button className='contact-btn' onClick={() => {}}>Contact Us</button>
                        </div>  
                        
                        </ul>

                        {/* <button className='menu-btn' onClick={toggleMenu}>
                            <span 
                                className={"material-symbols-outlined"} 
                                style={{ fontSize:"1.8rem" }}>
                                    {openMenu ? "close" : "menu"}
                            </span>
                        </button> */}
                    </div>
                </nav>
            </>
    );
};

export default Navbar;