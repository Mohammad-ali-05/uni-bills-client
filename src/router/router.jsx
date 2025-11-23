import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/mainLayout';
import Home from '../pages/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    }
])
export default Router;