import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import AuthContext from '../contexts/AuthContext';

const AllBills = () => {
    const data = useContext(AuthContext)
    const location = useLocation()
    console.log(location, data)

    return (
        <div>
            <p>All bills are here</p>
        </div>
    );
};

export default AllBills;