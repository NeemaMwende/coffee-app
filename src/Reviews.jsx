import React from 'react';
import "./Reviews.css";
import quote1 from "./Images/quote-img.png";
import pic1 from "./Images/pic-1.png";
import pic2 from "./Images/pic-2.png";
import pic3 from "./Images/pic-3.png";

const Reviews = () => {
  return (
    <section className="review" id="review">
            <h1 className="heading">Customer's <span>review</span></h1>
            <div className="box-container">
                <div className="box">
                    <img src={quote1} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Velit, expedita error? Odio odit quas
                          illo suscipi tempore temporibus
                          laudantium necessitatibus illum optio.</p>
                           <img src={pic1} className="user" />
                           <h3>Allen Renzen</h3>
                           <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                </div>
                <div className="box">
                    <img src={quote1} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Velit, expedita error? Odio odit quas
                          illo suscipi tempore temporibus
                          laudantium necessitatibus illum optio.</p>
                           <img src={pic1} className="user" />
                           <h3>Brian Wanyama</h3>
                           <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                </div>
                <div className="box">
                    <img src={quote1} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, expedita error? Odio odit quas
                         illo suscipi tempore temporibus
                         laudantium necessitatibus illum optio.</p>
                           <img src={pic2} class="user" />
                           <h3>Joseph Morgan</h3>
                           <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                </div>
                <div className="box">
                    <img src={quote1} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, expedita error? Odio odit quas
                         illo suscipi tempore temporibus
                         laudantium necessitatibus illum optio.</p>
                           <img src={pic3} class="user" />
                           <h3>Neema Mwende</h3>
                           <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                </div>
            </div>
        </section>
  )
}

export default Reviews;