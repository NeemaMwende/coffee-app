import React from 'react'
import "./Menu.css";
import menu1 from "./Images/menu-1.png";
import menu2 from "./Images/menu-2.png";
import menu3 from "./Images/menu-3.png";
import menu4 from "./Images/menu-4.png";
import menu5 from "./Images/menu-5.png";
import menu6 from "./Images/menu-6.png";
import SlidingCard from './SlideCard';

const Menu = () => {
    
    // const addCart () =>{
        
    // }
  return (
    <section className="menu" id="menu">
           
         <h1 className="heading">our <span>menu</span> </h1>
        
            <div className="box-container">
                
               <SlidingCard>
               <div className="box">
                    <img src={menu1} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button" onClick={() => {}}>Add to cart</div>
                </div>
               </SlidingCard>
                <SlidingCard>
                <div className="box">
                    <img src={menu2} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button">Add to cart</div>
                </div>
                </SlidingCard>
                <SlidingCard>
                <div className="box">
                    <img src={menu3} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button">Add to cart</div>
                </div>
                </SlidingCard>
                <SlidingCard>
                <div className="box">
                    <img src={menu4} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button">Add to cart</div>
                </div>
                </SlidingCard>
                <SlidingCard>
                <div className="box">
                    <img src={menu5} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button">Add to cart</div>
                </div>
                </SlidingCard>
                <SlidingCard>
                <div className="box">
                    <img src={menu6} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button">Add to cart</div>
                </div>
                </SlidingCard>
               <SlidingCard>
               <div className="box">
                    <img src={menu6} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button">Add to cart</div>
                </div>
               </SlidingCard>
               <SlidingCard>
               <div className="box">
                    <img src={menu6} alt="" />
                    <h3>tasty and healthy</h3>
                    <div className="price">KSH15.99 <span>KSH20.99</span></div>
                    <div className="button">Add to cart</div>
                </div>
               </SlidingCard>
            </div>
        </section>
  )
}

export default Menu;