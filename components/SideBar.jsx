import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons';

function useOutsideClick(ref, callback) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, () => {
        if (isOpen) setIsOpen(false);
    });

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div ref={wrapperRef}>
            <button onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-purple text-light-purple transition-all duration-500 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <h1 className='text-2xl ml-1 text-white flex items-center'>
                    External Links
                </h1>
                <ul className='space-y-1'>
                <li className='box-border p-4 border-4 -m-y-2'>
                    <a href="https://docs.playtheatria.com/" target="_blank">
                        <span>Wiki <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                        <p>Learn all about Theatria!</p>
                    </a>
                </li>
                <li className='box-border p-4 border-4 -m-y-2'>
                    <a href="https://discord.gg/jYS5rR2HxP" target="_blank">
                        <span>Discord <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                        <p>Connect with our community!</p>
                    </a>
                </li>
                <li className='box-border p-4 border-4'>
                    <a href="https://map.playtheatria.com/" target="_blank">
                        <span>Dynmap <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                        <p>Lost? Find your way!</p>
                    </a>
                </li>
                <li className='box-border p-4 border-4'>
                    <a href="https://theatrian-market.tebex.io/" target="_blank">
                        <span>Features <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                        <p>Support our efforts and cause!</p>
                    </a>
                </li>
                <li className='box-border p-4 border-4'>
                    <a href="https://www.instagram.com/theatriaofficial/?hl=en" target="_blank">
                        <span>Instagram <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                        <p>Follow us on Instagram!</p>
                    </a>
                </li>
                <li className='box-border p-4 border-4'>
                    <a href="https://shopdb.playtheatria.com/home" target="_blank">
                        <span>ShopDB <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                        <p>Find what players are selling and their prices!</p>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
