import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PublicRoute = ({children}) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    if (user) {
        navigate(location.state ? location.state : "/")
        return
    }

    return children
};

export default PublicRoute;