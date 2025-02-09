import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children }: { children: React.JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
