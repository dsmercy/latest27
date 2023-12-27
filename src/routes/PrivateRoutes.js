import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAccountStore from "../store/useAccountStore";

const PrivateRoute = ({ children }) => {

    const signedInUserData = useAccountStore((state) => state.signedInUserData);
    if (signedInUserData) {
        return children;
    }
    return <Navigate to="/login" replace />;    
  };

export default PrivateRoute;