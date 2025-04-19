import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import CSS for react-confirm-alert

function Header({ toggleSidebar }) {
  const { cartItems } = useCart(); // Get cart items from context
  const navigate = useNavigate();

  const handleLogout = () => {
    confirmAlert({
      title: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            localStorage.removeItem('authToken'); // Clear auth token
            navigate('/login'); // Navigate to login page
          }
        },
        {
          label: 'No',
          onClick: () => {
            // Do nothing if 'No' is clicked
          }
        }
      ]
    });
  };

  return (
    <header className="header">
      <div className="header-left">
        {/* Menu button for toggling sidebar */}
        <button className="menu-button" onClick={toggleSidebar}>☰</button>
        <h1 className="header-title">Dashboard</h1>
      </div>
      <div className="header-right">
        {/* Cart button with item count */}
        <button className="cart-button" onClick={() => navigate('/cart')}>
          Cart ({cartItems.length})
        </button>
        {/* Logout button with confirmation dialog */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
