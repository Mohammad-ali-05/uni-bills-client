import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <header>
                <nav className='relative'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;