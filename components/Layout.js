import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
        <div>
            <header className='flex items-center justify-between bg-gradient-to-r from-black from-50% via-dark-purple via-70% to-purple to-90% ...'>
                <Image className='left-0 animate-zoom' src="/Theatria_Alt2.png" alt="Theatria Favicon" width={100} height={100}/>
                <div className='ml-4 animate-zoom content-center text-center'>
                    <h1 className='text-6xl text-white'>Theatria</h1>
                    <p className='text-light-purple'>ip: mc.playtheatria.com</p>
                    <p className='text-purple' >Discover, Build, and Thrive Together</p>
                </div>
                <Image className='mt-auto' src='/ness23.png' alt="Ness" width={100} height={100}/>
            </header>
            <Navbar/>
            <main className='flex items-center justify-center m-6'>{children}</main>
            <footer className='bg-black text-white fixed bottom-0 left-0 right-0 text-center mt-6'>
                <div>&copy; {new Date().getFullYear()} Theatria. All rights reserved.</div>
                <div>NOT AN OFFICIAL MINECRAFT PRODUCT/SERVICE</div>
                <div>NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</div>
                <div>Contact us at playtheatria@outlook.com</div>
            </footer>
        </div>
    );
};

export default Layout;
