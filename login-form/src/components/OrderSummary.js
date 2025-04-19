
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../layouts/Layout';

const OrderSummary = () => {
  const { orderId } = useParams(); // Get the order ID from the URL
  const navigate = useNavigate();

  // Retrieve the orders from the Redux store
  const orders = useSelector((state) => state.orders.orders || []);

  // Memoize the order selection to avoid unnecessary re-renders
  const order = useMemo(() => {
    return orders.find(order => String(order.id) === String(orderId)); // Convert both to strings for comparison
  }, [orders, orderId]);

  // Calculate the total amount for the order
  const totalAmount = useMemo(() => {
    return order?.items?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  }, [order]);

  if (!order) {
    return (
      <Layout>
        <div className="order-not-found">
          <h2>Order Not Found</h2>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</p> {/* Ensure two decimal places */}
        
        <h3>Items:</h3>
        <ul>
          {order.items && order.items.length > 0 ? (
            order.items.map(item => (
              <li key={item.id}>
                {item.title} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))
          ) : (
            <p>No items found in this order.</p>
          )}
        </ul>

        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    </Layout>
  );
};

export default OrderSummary;


