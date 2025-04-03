import React from "react";
import about from '../assets/About.png'
const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">About Us</h2>
      <p className="lead text-center">
        We are a leading eCommerce store offering the best products at affordable prices.
      </p>
      <div className="row mt-4">
        <div className="col-md-6 d-flex flex-wrap justify-content-center">
          <img src={about} alt="About Us" className="img-fluid rounded" style={{width:'300px',height:'300px'}}/>
        </div>
        <div className="col-md-6">
          <p>
            At <strong>MyShop</strong>, we provide top-quality products, a seamless shopping experience, and exceptional customer service.
          </p>
          <ul>
            <li>Wide range of high-quality products</li>
            <li>Fast and reliable shipping</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
