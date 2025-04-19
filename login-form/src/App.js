

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Sidebar from './layouts/Sidebar';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import Contact from './components/Contact';
import Profile from './components/Profile';
import PaymentPage from './components/PaymentPage';
import ViewOrder from './components/ViewOrder';
import Toast from './components/Toast'; 
import AddressPage from './components/AddressPage';
import store from './store';
import CategoryPage from './components/CategoryPage';
import ProductList from './components/ProductList';
import OrderSummary from './components/OrderSummary';
import Wallet from './components/Wallet';
import CustomerSupport from './components/CustomerSupport';
import Chatbot from './components/Chatbot';
import GetCurrentAddress from './components/GetCurrentAddress';
import PrivateRoute from './Router/PrivateRoute'; 
import PublicRoute from './Router/PublicRoute';
import OrderSuccess from './components/OrderSuccess';
import EditProductPage from './components/EditProductPage';
import AddProduct from './components/AddProduct';
import Address from './components/NewAddressPage';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Manage sidebar visibility

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <AppContent 
            toggleSidebar={toggleSidebar} 
            isSidebarVisible={isSidebarVisible} // Pass the sidebar visibility state as a prop
          />
        </Router>
      </CartProvider>
    </Provider>
  );
}

// Split out content to use the useLocation hook properly
function AppContent({ toggleSidebar, isSidebarVisible }) {
  const location = useLocation(); // Get the current location

  // Conditionally render header if not on the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {/* Conditionally render the header based on the route */}
      {!isLoginPage && <Header toggleSidebar={toggleSidebar} />}
      
      {/* Sidebar visibility */}
      {isSidebarVisible && <Sidebar />}

      {/* Main routing section */}
      <main className="content">
      <Toast />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<PublicRoute><Form /></PublicRoute>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

          {/* Private routes */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="/vieworder" element={<PrivateRoute><ViewOrder /></PrivateRoute>} />
          <Route path="/addressList" element={<PrivateRoute><AddressPage /></PrivateRoute>} />
          <Route path="/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
          <Route path="/productlist" element={<PrivateRoute><ProductList /></PrivateRoute>} />
          <Route path="/order/:orderId" element={<PrivateRoute><OrderSummary /></PrivateRoute>} />
          <Route path="/categories" element={<PrivateRoute><CategoryPage /></PrivateRoute>} />
          <Route path="/AddressPage" element={<PrivateRoute><AddressPage /></PrivateRoute>} />
          <Route path="/edit-product/:id" element={<PrivateRoute><EditProductPage /></PrivateRoute>} /> {/* Fixed here */}
          <Route path="/add-product" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          {/* Routes that don't require authentication */}
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/add-address" element={<Contact />} />
          <Route path="/customerSupport" element={<CustomerSupport />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/ordersummary" element={<OrderSummary />} /> 
          <Route path="/getCurrentAddress" element={<GetCurrentAddress />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
          <Route path="/address" element={<Address />} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;



