import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PublicRoute = ({children}) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if (!user) {
        return children
    }

    return <Navigate to={location.state? location.state : "/profile"}></Navigate>
};

export default PublicRoute;