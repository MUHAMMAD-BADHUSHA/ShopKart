import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD12345",
      date: "2025-04-03",
      customer: "YourName",
      email: "YourName@example.com",
      address: "Ernakulam, Kerala, India",
      status: "Processing",
      items: [
        {
            id: 1,
            name: "Skin Care",
            price: "$20",
            image:
              "data:image/jpeg;base64,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",
          },
          {
            id: 2,
            name: "Body Spray",
            price: "$30",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cNQVMUQGeRC-6rdCguMecdynWXDN3rsBAQ&s",
          },
          {
            id: 3,
            name: "Men Watch",
            price: "$40",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyFH46awdSCgyYq-WlkraoxT5h5BborXGjQ&s",
          },
          {
            id: 4,
            name: "Shoe",
            price:"$50",
            image:
              "data:image/jpeg;base64,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",
          },
        
      ],
    },
  ]);

  const handleCancel = () => {
    alert(`Order has been canceled.`);
  };

  return (
    <>
    <Navbar/>
    <div className="container my-5 mt-5 pt-5">
        
      <h2 className="text-center">Your Orders</h2>
      {orders.map((order) => (
        <div className="card my-4 p-3 shadow" key={order.id}>
          <h5>Order ID: {order.id}</h5>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Status:</strong> <span className="badge bg-warning">{order.status}</span></p>

          <h6>Order Items:</h6>
          <ul className="list-group mb-3">
            {order.items.map((item, index) => (
              <li className="list-group-item d-flex justify-content-between" key={index}>
              <img src={item.image} width={'50'} height={'50'} alt="" />  {item.name} - ${item.price}
              </li>
            ))}
          </ul>

         

          <Link to={'/'}><button className="btn btn-danger mb-2 w-100" onClick={ handleCancel}>Cancel Order</button></Link>
          <button className="btn btn-primary">Track Order</button>
        </div>
      ))}
    </div>
    
    </>
  );
};

export default Order;
