import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ecommerce from "../assets/ecommerce.mp4";
import { Link } from "react-router-dom";

function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div ref={ref} className="container ">
      <div
        className=" d-flex flex-wrap  "
        style={{ marginTop: "100px" }}
        id="home"
      >
        <div
          className="col-xl-6 col-md-6 col-sm-10   "
          style={{ marginTop: "70px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900">
              Your One-Stop Shop for Quality Products
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Explore a wide range of premium products at unbeatable prices.
              Find everything you need with just a click.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 1.5 }}
            className="btn btn-outline-primary rounded-4 fw-bold me-3"
            style={{
              border: "1px solid rgb(11, 146, 209)",
            }}
          >
            About us
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: +50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: +50 }}
            transition={{ duration: 1.5 }}
            className="btn rounded-4 fw-bold "
            style={{ backgroundColor: "rgb(26, 124, 204)" }}
          >
            <Link to={"/contact"} className="text-decoration-none text-light ">
              Shop Now
            </Link>
          </motion.button>
        </div>
        <motion.div
          className="d-flex pt-5 flex-wrap justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-md-6 col-xl-6"
          initial={{ opacity: 0, x: +50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: +50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="video-container">
            <video autoPlay muted loop>
              <source src={ecommerce} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
