import React from 'react';
import "./Home.css";
// import Link from 'react-router-dom';

const Home = () => {
  return (
        <section class="home" id="home">
          {/* <Link to="/">Home</Link> */}
            <div className="content animate___animated animate_fadeIn animate_infinite">
                <h3>Fresh coffee in <span>the morning</span> </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nulla iure ad quos vero nam culpa, minima ipsum nemo, 
                    natus fugit, quas a? Architecto ut omnis accusamus libero neque asperiores impedit.</p>
                    <div class="button">Get yours now</div>
            </div>
          
        </section>
  )
}

export default Home;