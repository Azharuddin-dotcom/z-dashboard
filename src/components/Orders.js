import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://z-backend-d97a.onrender.com/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  if (orders.length === 0) {
    return (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    );
  } else {
    return (
      <div className="orders">
        <h1>Order List</h1>
        <div>
          {orders.map((order) => (
            <div
              key={order._id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h2>{order.name}</h2>
              <p>
                <strong>Quantity:</strong> ${order.qty}
              </p>
              <p>{order.price}</p>
              <p>{order.mode}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Orders;
