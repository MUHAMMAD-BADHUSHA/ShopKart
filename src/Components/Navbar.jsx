import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image1.webp";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mt-0 fixed-top bg-light">
      <div className="container" style={{ alignContent: "center" }}>
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="30"
            className="rounded-circle"
          />
          <h4 className="fw-bolder text-primary">Shopkart</h4>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <span className="navbar-toggler-icon  "></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul
            className="navbar-nav d-flex justify-content-center"
            style={{ columnGap: "60px" }}
          >
            <li className="nav-item">
              <Link className="nav-link fw-bold text-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-primary" to="/products">
                shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold text-primary" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link fw-bold text-primary" to="/order">
                Orders
              </Link>
            </li>
          </ul>
          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
