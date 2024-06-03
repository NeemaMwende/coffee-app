import React from 'react';
import "./Products.css";
import product1 from "./Images/product-1.png";
import product2 from "./Images/product-2.png";
import product3 from "./Images/product-3.png";
import SlidingCard from './SlideCard';

const Products = () => {
  return (
    <section className="product" id="product">
    <h1 className="heading">our <span>products</span></h1>
       <SlidingCard>
        <div className="box-container">
            <div className="box">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src={product1} />
                </div>
                <div className="content">
                    <h3>fresh coffee</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price">KSH17.99 <span>KSH22.99</span></div>
                </div>
            </div>
            <div className="box">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src={product2} />
                </div>
                <div className="content">
                    <h3>fresh coffee</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price">KSH17.99 <span>KSH22.99</span></div>
                </div>
            </div>
            <div className="box">
                <div class="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src={product3} />
                </div>
                <div className="content">
                    <h3>fresh coffee</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div class="price">KSH17.99 <span>KSH22.99</span></div>
                </div>
            </div>
        </div>
        </SlidingCard>
    </section>
  )
}

export default Products;