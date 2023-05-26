// components/VotingWebsites.js
import React from 'react';
import styles from '../css/layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
                        {website.name} <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default VotingWebsites;
