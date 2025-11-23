import React from 'react';
import { useLocation } from 'react-router';

const AllBills = () => {
    const location = useLocation()
    console.log(location)

    return (
        <div>
            <p>All bills are here</p>
        </div>
    );
};

export default AllBills;