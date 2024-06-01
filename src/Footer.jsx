import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer" id="footer">
            <div className="share">
                <a href="#" className="fab fa-facebook"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
                <a href="#" className="fab fa-pinterest"></a>
            </div>
            <div className="links">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#product">product</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blog">blog</a>
            </div>
            <div className="credit">Created by <span>Neema Mwende</span> | all rights reserved</div>
      </section>
  )
}

export default Footer;