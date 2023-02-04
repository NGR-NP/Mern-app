import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentUserId } from "./authSlice";

const IsLoggedIn = () => {
  const id = useSelector(selectCurrentUserId);
  const location = useLocation();

  return id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default IsLoggedIn;
