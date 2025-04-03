import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const handleSubmit = () => {
    alert("Payment Successful!");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Payment Details</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label className="form-label">Select Payment Method</label>
          <select className="form-select">
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        <>
          <div className="mb-3">
            <label className="form-label">Cardholder Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              name="cardNumber"
              placeholder="Enter card number"
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="form-label">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                name="expiry"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">CVV</label>
              <input
                type="text"
                className="form-control"
                name="cvv"
                placeholder="123"
                required
              />
            </div>
          </div>
        </>

        <div className="d-flex flex-wrap justify-content-end">
          
          <Link to={"/"}>
            <button className="btn btn-danger  mt-2 me-1">cancel</button>
          </Link>
          <Link to={"/order"}>
            <button
              type="submit"
              className="btn btn-success  mt-2"
              style={{ width: "200px" }}
              onClick={() => {
                alert("order placed");
              }}
            >
              Pay Now
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Payment;
