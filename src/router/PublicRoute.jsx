import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const PublicRoute = () => {
    const {user} = useContext(AuthContext)

    

    return (
        <div>
            
        </div>
    );
};

export default PublicRoute;