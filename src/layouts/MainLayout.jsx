import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
            <header>
                <nav className='relative'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
                <Toaster></Toaster>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;