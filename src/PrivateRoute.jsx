import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setInitialAuthState } from "./redux/actions/authActions";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = ({ userData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useMemo(
    () => (userData, accessToken) => userData && accessToken,
    []
  );
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated(userData, token))
      setInitialAuthState(dispatch, navigate);
  }, [dispatch, navigate, isAuthenticated, userData, token]);

  return isAuthenticated(userData, token) ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} />
  );
};

export default PrivateRoute;
