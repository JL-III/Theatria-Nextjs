import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div >
            <button onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-purple text-light-purple transition-all duration-500 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <h1 className='text-2xl ml-1 text-white'>
                    External Links
                </h1>
                <ul>
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
            </div>
        </div>
    );
};

export default Sidebar;
