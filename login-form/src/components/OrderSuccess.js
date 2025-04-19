// import React, { useEffect, useState } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom';

// const OrderSuccess = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve the contact information (if available) from localStorage or simulate order details
//     const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
//     if (storedContactInfo) {
//       setOrderDetails({
//         orderId: Math.floor(Math.random() * 100000), // Simulate order ID
//         name: storedContactInfo.name,
//         email: storedContactInfo.email,
//         address: `${storedContactInfo.localAddress}, ${storedContactInfo.city} - ${storedContactInfo.pinCode}`,
//         paymentMethod: localStorage.getItem('paymentMethod'), // Assume you store payment method in localStorage
//       });
//     } else {
//       // Redirect to home if no order info is available
//       navigate('/');
//     }
//   }, [navigate]);

//   return (
//     <Layout>
//       <div className="order-success-page">
//         <h2>Order Placed Successfully!</h2>
//         {orderDetails ? (
//           <div className="order-details">
//             <p>Thank you for your purchase, {orderDetails.name}!</p>
//             <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
//             <p><strong>Email:</strong> {orderDetails.email}</p>
//             <p><strong>Shipping Address:</strong> {orderDetails.address}</p>
//             <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
//             <p>Your order will be delivered soon!</p>
//           </div>
//         ) : (
//           <p>Loading your order details...</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default OrderSuccess;
// import React, { useEffect, useState } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom';

// const OrderSuccess = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve the contact information (if available) from localStorage or simulate order details
//     const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
//     const paymentMethod = localStorage.getItem('paymentMethod');

//     if (storedContactInfo) {
//       setOrderDetails({
//         orderId: Math.floor(Math.random() * 100000), // Simulate order ID
//         name: storedContactInfo.name,
//         email: storedContactInfo.email,
//         address: `${storedContactInfo.localAddress}, ${storedContactInfo.city} - ${storedContactInfo.pinCode}`,
//         paymentMethod: paymentMethod,
//       });

//       // Store the order details in localStorage or dispatch to Redux store
//       localStorage.setItem('orderDetails', JSON.stringify({
//         id: Math.floor(Math.random() * 100000),
//         items: [], // Add actual items data if needed
//         total: 100, // Add total amount if needed
//       }));
//     } else {
//       // Redirect to home if no order info is available
//       navigate('/ordersuccess');
//     }
//   }, [navigate]);

//   const handleViewOrder = () => {
//     navigate(`/vieworder/${orderDetails.orderId}`);
//   };

//   return (
//     <Layout>
//       <div className="order-success-page">
//         <h2>Order Placed Successfully!</h2>
//         {orderDetails ? (
//           <div className="order-details">
//             <p>Thank you for your purchase, {orderDetails.name}!</p>
//             <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
//             <p><strong>Email:</strong> {orderDetails.email}</p>
//             <p><strong>Shipping Address:</strong> {orderDetails.address}</p>
//             <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
//             <p>Your order will be delivered soon!</p>
//             <button onClick={handleViewOrder}>View Order</button>
//           </div>
//         ) : (
//           <p>Loading your order details...</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default OrderSuccess;

// import React, { useEffect, useState } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom';

// const OrderSuccess = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve the contact information (if available) from localStorage or simulate order details
//     const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
//     const paymentMethod = localStorage.getItem('paymentMethod');

//     if (storedContactInfo) {
//       const newOrderId = Math.floor(Math.random() * 100000); // Simulate order ID
//       const order = {
//         orderId: newOrderId,
//         name: storedContactInfo.name,
//         email: storedContactInfo.email,
//         address: `${storedContactInfo.localAddress}, ${storedContactInfo.city} - ${storedContactInfo.pinCode}`,
//         paymentMethod: paymentMethod,
//       };

//       setOrderDetails(order);

//       // Store the order details in localStorage or dispatch to Redux store
//       localStorage.setItem('orderDetails', JSON.stringify({
//         id: newOrderId,
//         items: [], // Add actual items data if needed
//         total: 100, // Add total amount if needed
//       }));
//     } else {
//       // Redirect to home or some other valid route if no order info is available
//       navigate('/ordersuccess');
//     }
//   }, [navigate]);

//   const handleViewOrder = () => {
//     if (orderDetails) {
//       navigate(`/ordersuccess/${orderDetails.orderId}`);
//     }
//   };

//   return (
//     <Layout>
//       <div className="order-success-page">
//         <h2>Order Placed Successfully!</h2>
//         {orderDetails ? (
//           <div className="order-details">
//             <p>Thank you for your purchase, {orderDetails.name}!</p>
//             <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
//             <p><strong>Email:</strong> {orderDetails.email}</p>
//             <p><strong>Shipping Address:</strong> {orderDetails.address}</p>
//             <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
//             <p>Your order will be delivered soon!</p>
//             <button onClick={handleViewOrder}>View Order</button>
//           </div>
//         ) : (
//           <p>Loading your order details...</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default OrderSuccess;

//1
// import React, { useEffect, useState } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';  // Import useDispatch
// import { addOrder } from '../redux/orderSlice';  // Import the addOrder action

// const OrderSuccess = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();  // Initialize dispatch

//   useEffect(() => {
//     // Retrieve the contact information (if available) from localStorage or simulate order details
//     const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
//     const paymentMethod = localStorage.getItem('paymentMethod');

//     if (storedContactInfo) {
//       const newOrderId = Math.floor(Math.random() * 100000); // Simulate order ID
//       const order = {
//         orderId: newOrderId,
//         name: storedContactInfo.name,
//         email: storedContactInfo.email,
//         address: `${storedContactInfo.localAddress}, ${storedContactInfo.city} - ${storedContactInfo.pinCode}`,
//         paymentMethod: paymentMethod,
//       };

//       setOrderDetails(order);

//       // Store the order details in localStorage or dispatch to Redux store
//       const orderData = {
//         id: newOrderId,
//         items: [], // Add actual items data if needed
//         total: 100, // Add total amount if needed
//       };

//       // Dispatch the order to Redux store
//       dispatch(addOrder(orderData));

//       // Optionally store the order in localStorage
//       localStorage.setItem('orderDetails', JSON.stringify(orderData));
//     } else {
//       // Redirect to a valid route if no order info is available, e.g., home or cart
//       navigate('/ordersuccess');
//     }
//   }, [navigate, dispatch]);

//   const handleViewOrder = () => {
//     if (orderDetails) {
//       // Navigate to view order page with the correct order ID
//       navigate(`/vieworder/${orderDetails.orderId}`);
//     }
//   };

//   return (
//     <Layout>
//       <div className="order-success-page">
//         <h2>Order Placed Successfully!</h2>
//         {orderDetails ? (
//           <div className="order-details">
//             <p>Thank you for your purchase, {orderDetails.name}!</p>
//             <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
//             <p><strong>Email:</strong> {orderDetails.email}</p>
//             <p><strong>Shipping Address:</strong> {orderDetails.address}</p>
//             <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
//             <p>Your order will be delivered soon!</p>
//             <button onClick={handleViewOrder}>View Order</button>
//           </div>
//         ) : (
//           <p>Loading your order details...</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default OrderSuccess;

// OrderSuccess.js
//1
// import React, { useEffect, useState } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addOrder } from '../redux/orderSlice';

// const OrderSuccess = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   useEffect(() => {
//     const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
//     const paymentMethod = localStorage.getItem('paymentMethod');

//     if (storedContactInfo) {
//       const newOrderId = Math.floor(Math.random() * 100000);
//       const order = {
//         orderId: newOrderId,
//         name: storedContactInfo.name,
//         email: storedContactInfo.email,
//         address: `${storedContactInfo.localAddress}, ${storedContactInfo.city} - ${storedContactInfo.pinCode}`,
//         paymentMethod,
//         items: cartItems,  // Include cart items
//       };

//       setOrderDetails(order);

//       const orderData = {
//         id: newOrderId,
//         items: cartItems,
//         total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
//       };

//       dispatch(addOrder(orderData));

//       localStorage.setItem('orderDetails', JSON.stringify(orderData));
//     } else {
//       navigate('/ordersuccess');
//     }
//   }, [navigate, dispatch, cartItems]);

//   const handleViewOrder = () => {
//     if (orderDetails) {
//       navigate(`/vieworder/${orderDetails.orderId}`);
//     }
//   };

//   return (
//     <Layout>
//       <div className="order-success-page">
//         <h2>Order Placed Successfully!</h2>
//         {orderDetails ? (
//           <div className="order-details">
//             <p>Thank you for your purchase, {orderDetails.name}!</p>
//             <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
//             <p><strong>Email:</strong> {orderDetails.email}</p>
//             <p><strong>Shipping Address:</strong> {orderDetails.address}</p>
//             <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
//             <button onClick={handleViewOrder}>View Order</button>
//           </div>
//         ) : (
//           <p>Loading your order details...</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default OrderSuccess;

import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../redux/orderSlice';

const OrderSuccess = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
    const paymentMethod = localStorage.getItem('paymentMethod');

    if (storedContactInfo) {
      const newOrderId = Math.floor(Math.random() * 100000);
      const order = {
        orderId: newOrderId,
        name: storedContactInfo.name,
        email: storedContactInfo.email,
        address: `${storedContactInfo.localAddress}, ${storedContactInfo.city} - ${storedContactInfo.pinCode}`,
        paymentMethod,
        items: cartItems,
      };

      setOrderDetails(order);

      const orderData = {
        id: newOrderId,
        items: cartItems,
        total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };

      dispatch(addOrder(orderData));

      localStorage.setItem('orderDetails', JSON.stringify(orderData));
    } else {
      navigate('/ordersuccess');
    }
  }, [navigate, dispatch, cartItems]);

  const handleViewOrder = () => {
    if (orderDetails) {
      navigate(`/vieworder/${orderDetails.orderId}`);
    }
  };

  const handleRedirectToOrders = () => {
    navigate('/orders');  // Redirect to the OrderPage
  };

  return (
    <Layout>
      <div className="order-success-page">
        <h2>Order Placed Successfully!</h2>
        {orderDetails ? (
          <div className="order-details">
            <p>Thank you for your purchase, {orderDetails.name}!</p>
            <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
            <p><strong>Email:</strong> {orderDetails.email}</p>
            <p><strong>Shipping Address:</strong> {orderDetails.address}</p>
            <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
            <button onClick={handleViewOrder}>View Order</button>
            <button onClick={handleRedirectToOrders}>Go to My Orders</button> {/* Add redirect button */}
          </div>
        ) : (
          <p>Loading your order details...</p>
        )}
      </div>
    </Layout>
  );
};

export default OrderSuccess;
