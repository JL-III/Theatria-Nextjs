// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from '../css/navbar.module.css';

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
                <li className={styles.li}>
                    <Link href="/ranks" passHref>
                        <span className={styles.a}>Ranks</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
