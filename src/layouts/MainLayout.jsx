import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="pt-16">
                <ScrollRestoration></ScrollRestoration>
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