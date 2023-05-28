import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';

const Navbar = () => {
    return (
        <nav className='bg-purple text-light-purple border-dark-purple border-2'>
            <div className='flex justify-between px-2'>
                <div>
                    <ul className='flex'>
                        <li className='px-2'>
                            <Link href="/" passHref>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className='px-2'>
                            <Link href="/voting" passHref>
                                <span>Voting Websites</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Sidebar/>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;