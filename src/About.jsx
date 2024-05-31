import React from 'react';
import "./About.css";
import angel from "../src/Images/about-img.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
            <h1 className="heading"><span>about</span> us</h1>
            <div className="row">
                <div className="image">
                    <img src={angel} />
                </div>
                <div className="content">
                    <h3>What makes your coffee special?</h3>
                    <p>Coffee and other products Quality: high quality ingredients,
                     best brewing recipes, consistency, fresh and appealing sweet & savory
                      selections are keys to success.Seasonality: take an advantage of
                       seasonal products and phenomenas.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Perspiciatis nesciunt temporibus minus mollitia totam, 
                     alias hic ratione nulla, laboriosam reprehenderit consequatur
                      repellendus et maxime sed itaque illo debitis, illum neque.</p>
                      <div className="button">Learn more</div>
                </div>
            </div>
        </section>
  )
}

export default About