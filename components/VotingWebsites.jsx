// components/VotingWebsites.js
import React from 'react';
import styles from '../css/voting.module.css';

const VotingWebsites = ({ websites }) => {
    return (
        <ul className={styles.list}>
            {websites.map((website) => (
                <li key={website.id} className={styles.listItem}>
                    <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        {website.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default VotingWebsites;
