// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from '../css/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/" passHref>
                        <span className={styles.a}>Home</span>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/voting" passHref>
                        <span className={styles.a}>Voting Websites</span>
                    </Link>
                </li>
                {/* <li className={styles.li}>
                    <Link href="/ranks" passHref>
                        <span className={styles.a}>Ranks</span>
                    </Link>
                </li> */}
                <li className={styles.li}>
                    <a href="https://docs.playtheatria.com/" target="_blank">
                        <span className={styles.a}>Wiki <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="https://discord.gg/jYS5rR2HxP" target="_blank">
                        <span className={styles.a}>Discord <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="https://map.playtheatria.com/" target="_blank">
                        <span className={styles.a}>Dynmap <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="https://store.playtheatria.com/" target="_blank">
                        <span className={styles.a}>Features <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="https://www.instagram.com/theatriaofficial/?hl=en" target="_blank">
                        <span className={styles.a}>Instagram <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="https://shopdb.playtheatria.com/home" target="_blank">
                        <span className={styles.a}>ShopDB <FontAwesomeIcon icon={faExternalLinkAlt} /></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
