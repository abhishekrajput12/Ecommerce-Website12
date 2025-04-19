
import React, { useState } from 'react';
import Sidebar from '../layouts/Sidebar'; // Ensure the correct import path
import Header from '../components/Header'; // Ensure the correct import path

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Pass toggleSidebar function to Header */}
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content">
        {/* Conditionally render Sidebar */}
        {isSidebarOpen && <Sidebar />}
        {/* Render the main content */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
