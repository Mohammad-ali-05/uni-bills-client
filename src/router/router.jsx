import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/mainLayout';
import Home from '../pages/Home';
import AllBills from '../pages/AllBills';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/bills",
                element: <AllBills></AllBills>
            }
        ]
    }
])
export default Router;