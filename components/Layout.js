// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';


const Layout = ({ children }) => {
    return (
        <div>
            <header className='flex items-center justify-start bg-gradient-to-r from-black from-50% via-dark-purple via-70% to-purple to-90% ...'>
                <Image className='left-0' src="/Theatria_Alt2.png" alt="Theatria Favicon" width={100} height={100}/>
                <div className='ml-4'>
                    <h1 className='text-6xl text-light-purple'>Theatria</h1>
                    <p className='text-purple' >Discover, Build, and Thrive Together</p>
                </div>
                </header>
            <Navbar/>
            <main className='flex items-center justify-center m-6'>
                <div className='mb-6'>
                    {children}
                </div>
            </main>
            <footer className='bg-black text-light-purple fixed bottom-0 left-0 right-0 text-center mt-6'>
                &copy; {new Date().getFullYear()} Theatria. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
