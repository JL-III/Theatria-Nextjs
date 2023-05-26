// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import styles from '../css/layout.module.css';


const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Image src="/Theatria_Alt2.png" alt="Theatria Favicon" className={styles.favicon} width={500} height={500}/>
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
