// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import styles from '../css/layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <img src="/Theatria_Alt2.png" alt="Theatria Favicon" className={styles.favicon} />
                <h1 className={styles.serverName}>Theatria</h1>
                <p className={styles.tagline}>Discover, Build, and Thrive Together</p>
            </header>
            <Navbar />
            <main className={styles.content}>{children}</main>
            <footer className={styles.footer}>
                &copy; {new Date().getFullYear()} Theatria. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
