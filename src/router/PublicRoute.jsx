import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate } from 'react-router';

const PublicRoute = ({children}) => {
    const { user } = useContext(AuthContext)

    if (!user) {
        return children
    }

    return <Navigate to={"/profile"}></Navigate>
};

export default PublicRoute;