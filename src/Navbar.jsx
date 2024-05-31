import React, { useState } from 'react';
import './Navbar.css';
import angel from "../src/Images/logo.png"
// import { Link } from 'react-router-dom';

const Navbar = () => {
 
    return (
            <>
                <div className="header">
                    <div className="logo">
                     <img src={angel} />
                    </div>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#home">
                            <span className="icon">
                                <i className="fas fa-home"></i>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#about">
                            <span className="icon">
                                <i className="far fa-bookmark"></i>
                            </span>
                            <span className="text">About</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#menu">
                            <span className="icon">
                                <i className="fab fa-java"></i>
                            </span>
                            <span className="text">Menu</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#product">
                            <span className="icon">
                                <i className="fab fa-product-hunt"></i>
                            </span>
                            <span className="text">Products</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#review">
                            <span className="icon">
                                <i className="fas fa-book-open"></i>
                            </span>
                            <span className="text">Review</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#contact">
                            <span className="icon">
                                <i className="far fa-user"></i>
                            </span>
                            <span className="text">Contact</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#blog">
                            <span className="icon">
                                <i className="fas fa-blog"></i>
                            </span>
                            <span class="text">Blogs</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
            <div className="m-icons">
                <div className="fas fa-search" id="search-btn"></div>
                <div className="fas fa-shopping-cart" id="cart-btn"></div>
                <div className="fas fa-bars" id="menu-btn"></div>
            </div>
            <div className="search-form">
                <input type="search" id="search-input" placeholder="Search here..." /> 
                <label for="search-input" className="fas fa-search"></label>
            </div>
            <div className="cart-items-container">
                <div className="cart-items">
                    <span className="fas fa-times"></span>
                    <img src="./images/cart-item-1.png" />
                    <div className="content">
                        <h3>Cart Item 1</h3>
                        <div className="price">KSH25.99/-</div>
                    </div>
                </div>
                <div className="cart-items">
                    <span className="fas fa-times"></span>
                    <img src="./images/cart-item-2.png" />
                    <div className="content">
                        <h3>Cart Item 2</h3>
                        <div class="price">KSH25.99/-</div>
                    </div>
                </div>
                <div className="cart-items">
                    <span className="fas fa-times"></span>
                    <img src="./images/cart-item-3.png" />
                    <div className="content">
                        <h3>Cart Item 3</h3>
                        <div className="price">KSH25.99/-</div>
                    </div>
                </div>
                <div className="cart-items">
                    <span class="fas fa-times"></span>
                    <img src="./images/cart-item-4.png" />
                    <div className="content">
                        <h3>Cart Item 4</h3>
                        <div className="price">KSH25.99/-</div>
                    </div>
                </div>
                <div className="button">Checkout</div>
            </div>
            
            <div className="nav-bar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#product">product</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blog">blog</a>
            </div>
        </div>
            </>
    );
};

export default Navbar;