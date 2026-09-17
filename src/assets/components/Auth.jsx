import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({ children, requiredRole = [] }) => {

    const { isAuthenticated, user } = useSelector(
        (state) => state.userState
    );

   
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    
    if (
        requiredRole.length > 0 &&
        !requiredRole.includes(user?.role)
    ) {
        return <Navigate to="/unauthorized" replace />;
    }

   
    return children;
};

export default Auth;