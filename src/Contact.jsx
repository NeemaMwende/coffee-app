import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
    <h1 className="heading"><span>contact</span> us</h1>
    <div className="row">
        <iframe class = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7287164851828!2d36.91787541410136!3d-1
        .3390761360621226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f132b94a8054d%3A0xb5f8bfbd5263560e!2s
        Kenya%20Airports%20Authority-Jomo%20Kenyatta%20Internation!5e0!3m2!1sen!2ske!4v1644834748788!5m2!1sen!2ske"
         width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" />
         <form action="">
             <h3>get in touch</h3>
             <div className="inputBox">
                 <span className="fas fa-user"></span>
                 <input type="text" placeholder="name" />
             </div>
             <div className="inputBox">
                <span className="fas fa-envelope"></span>
                <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
                <span className="fas fa-phone"></span>
                <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="Contact now" className="button" />
         </form>
    </div>
</section>
  )
}

export default Contact;