import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className=' max-w-[1600px] mx-auto p-2 sm:p-5 md:p-12 pt-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;