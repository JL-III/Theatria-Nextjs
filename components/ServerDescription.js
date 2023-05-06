// components/ServerDescription.js
import React from 'react';
import styles from '../css/serverdescription.module.css';

const ServerDescription = () => {
    return (
        <div className={styles.description}>
            <h2>About Theatria</h2>
            <p>
                {/* Add your server description here */}
                Welcome to Theatria, a Minecraft server where creativity and adventure
                meet! Join our vibrant community, participate in exciting events, and
                explore our unique landscapes.
            </p>
        </div>
    );
};

export default ServerDescription;
