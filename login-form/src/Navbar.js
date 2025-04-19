// // src/Navbar.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar">
//       <ul>
//         <li><button onClick={() => navigate('/dashboard')}>Home</button></li>
//         <li><button onClick={() => navigate('/about')}>About</button></li>
//         <li><button onClick={() => navigate('/contact')}>Contact</button></li>
//         <li><button onClick={() => navigate('/cart')}>Cart</button></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// // src/Navbar.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext';

// function Navbar() {
//   const { cartItems } = useCart();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     alert('You have been logged out.');
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <h1>My Application</h1>
//       <div>
//         <button onClick={() => navigate('/cart')}>Cart ({cartItems.length})</button>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext';

// function Navbar() {
//   const { cartItems } = useCart();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     alert('You have been logged out.');
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <h1>My Application</h1>
//       <div>
//         <button onClick={() => navigate('/cart')}>Cart ({cartItems.length})</button>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext';
// import { FaShoppingCart } from 'react-icons/fa'; // Import a cart icon from react-icons

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage toggle
//   const { cartItems } = useCart();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     alert('You have been logged out.');
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
//   };

//   return (
//     <nav className="navbar">
//       <h1>My Application</h1>
//       <div className="navbar-actions">
//         <button onClick={toggleMenu}>
//           {isMenuOpen ? 'Close Menu' : 'Open Menu'}
//         </button>
//         <button onClick={() => navigate('/cart')}>
//           <FaShoppingCart /> ({cartItems.length})
//         </button>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       {isMenuOpen && (
//         <div className="dropdown-menu">
//           {/* Add dropdown menu content here */}
//           <button onClick={() => navigate('/profile')}>Profile</button>
//           <button onClick={() => navigate('/settings')}>Settings</button>
//           {/* Add more options as needed */}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext';
// import { FaShoppingCart } from 'react-icons/fa'; // Import a cart icon from react-icons

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage toggle
//   const { cartItems } = useCart();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     alert('You have been logged out.');
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
//   };

//   return (
//     <nav className="navbar">
//       <h1 className="navbar-title">My Application</h1>
//       <div className="navbar-actions">
//         <button className="menu-button" onClick={toggleMenu}>
//           {isMenuOpen ? 'Close Menu' : 'Open Menu'}
//         </button>
//         <button className="cart-button" onClick={() => navigate('/cart')}>
//           <FaShoppingCart /> ({cartItems.length})
//         </button>
//         <button className="logout-button" onClick={handleLogout}>Logout</button>
//       </div>
//       {isMenuOpen && (
//         <div className="dropdown-menu">
//           <button onClick={() => navigate('/profile')}>Profile</button>
//           <button onClick={() => navigate('/settings')}>Settings</button>
//           <button onClick={() => navigate('/contact')}>Contact</button>
//           <button onClick={() => navigate('/customerSupport')}>Customer Support</button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
