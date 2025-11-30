import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if (user) {
        return children
    }

    return <Navigate to={"/login"} state={location.pathname}></Navigate>
};

export default PrivateRoute;