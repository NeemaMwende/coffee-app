import React from 'react'
import "./Blogs.css";
import blog1 from "./Images/blog-1.jpeg";
import blog2 from "./Images/blog-2.jpeg";
import blog3 from "./Images/blog-3.jpeg";

const Blogs = () => {
  return (
    <section className="blog" id="blog">
            <h1 className="heading">our <span>blogs</span></h1>
            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img src={blog1} />
                    </div>
                    <div className="content">
                        <a href="#" class="title">Tasty and Refreshing Coffee</a>
                        <span>by admin / 14st Feb, 2022</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="button">Read more</div>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={blog2} />
                    </div>
                    <div className="content">
                        <a href="#" className="title">Tasty and Refreshing Coffee</a>
                        <span>by admin / 14st Feb, 2022</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="button">Read more</div>
                    </div>
                </div>
                <div class="box">
                    <div className="image">
                        <img src={blog3} />
                    </div>
                    <div className="content">
                        <a href="#" className="title">Tasty and Refreshing Coffee</a>
                        <span>by admin / 14st Feb, 2022</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="button">Read more</div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Blogs;