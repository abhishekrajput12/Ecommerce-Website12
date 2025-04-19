
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SupportIcon from '@mui/icons-material/Support';
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import LogoutIcon from '@mui/icons-material/Logout'; // Assuming you want to add logout later

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation and selected state
  const handleNavigation = (path) => {
    navigate(path);
    // if (isOpen) {
    //   toggleSidebar();
    // }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <button 
            onClick={() => handleNavigation('/dashboard')}
            className={isActive('/dashboard') ? 'active' : ''}
          >
            <DashboardIcon /> <b>Dashboard</b>
          </button>
        </li>
        <li>
          <button 
          
            onClick={() => handleNavigation('/profile')}
            className={isActive('/profile') ? 'active' : ''}
          >
            <PersonIcon /> <b>Profile</b>
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('/contact')}
            className={isActive('/contact') ? 'active' : ''}
          >
            <ContactSupportIcon /> <b>Contact</b>
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('/cart')}
            className={isActive('/cart') ? 'active' : ''}
          >
            <ShoppingCartIcon /> <b>Cart</b>
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('/wallet')}
            className={isActive('/wallet') ? 'active' : ''}
          >
            <AccountBalanceWalletIcon /> <b>Wallet</b>
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('/customerSupport')}
            className={isActive('/customerSupport') ? 'active' : ''}
          >
            <SupportIcon /> <b>Customer Support</b>
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavigation('/addressList')}
            className={isActive('/addressList') ? 'active' : ''}
          >
            <HomeIcon /> <b>New Address</b>
          </button>
        </li>
        {/* <li>
          <button 
            onClick={() => handleNavigation('/address')}
            className={isActive('/address') ? 'active' : ''}
          >
            <HomeIcon /> <b>New Address</b>
          </button>
        </li> */}
        <li>
          <button 
            onClick={() => handleNavigation('/vieworder')}
            className={isActive('/vieworder') ? 'active' : ''}
          >
            <ViewListIcon /> <b>View Full Order</b>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;



