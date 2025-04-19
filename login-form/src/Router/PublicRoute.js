
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if user is authenticated

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
