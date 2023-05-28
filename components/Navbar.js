// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className=''>
            <ul className='flex flex-wrap justify-start lg:justify-center bg-purple text-light-purple overflow-x-hidden hover:overflow-x-auto whitespace-nowrap px-2'>
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
                <li className='px-2'>
                    <a href="https://docs.playtheatria.com/" target="_blank">
                        <span>Wiki <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className='px-2'>
                    <a href="https://discord.gg/jYS5rR2HxP" target="_blank">
                        <span>Discord <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className='px-2'>
                    <a href="https://map.playtheatria.com/" target="_blank">
                        <span>Dynmap <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className='px-2'>
                    <a href="https://store.playtheatria.com/" target="_blank">
                        <span>Features <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className='px-2'>
                    <a href="https://www.instagram.com/theatriaofficial/?hl=en" target="_blank">
                        <span>Instagram <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className='px-2'>
                    <a href="https://shopdb.playtheatria.com/home" target="_blank">
                        <span>ShopDB <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
