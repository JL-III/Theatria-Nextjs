// components/ServerDescription.js
import React from 'react';
import styles from '../css/layout.module.css';

const ServerDescription = () => {
    return (
        <div className={styles.box}>
            <h1>🔮 About Theatria 🔮</h1>
            <p>
                Step into the world of <b>Theatria</b>, a Minecraft server like no other. Here, you won't just play the game - you'll live an <i>unforgettable adventure</i>. Our established, friendly community is always welcoming new members, making Theatria the perfect place to forge new friendships as you delve into the depths of Minecraft's expansive universe.
            </p>
            <p>
                What makes us stand out? We've been around for years, proving our commitment to providing a reliable and stable gaming platform. Our server isn't just any server - it's a place where you can truly leave your mark. With our custom items and enchantments, along with our own economy system, you have the power to shape your Minecraft journey in unique ways.
            </p>
            <p>
                And don't worry about losing your progress - we don't do map resets, so everything you build will remain from start to finish.
            </p>
            <p>
                So why wait? Join us at Theatria and become a part of our family. Experience Minecraft like never before!
            </p>
        </div>
    );
};

export default ServerDescription;
