// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import styles from '../css/layout.module.css';

const Layout = ({ children }) => {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.serverName}>Theatria</h1>
                <p className={styles.tagline}>Discover, Build, and Thrive Together</p>
            </header>
            <Navbar />
            <main>{children}</main>
            <footer className={styles.footer}>
                &copy; {new Date().getFullYear()} Theatria. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
