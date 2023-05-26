// pages/voting-websites.js
import React from 'react';
import VotingWebsites from '../components/VotingWebsites';
import votingWebsitesData from '../data/votingWebsites.json';
import styles from '../css/layout.module.css';

const VotingWebsitesPage = () => {
    return (
        <div className={styles.box}>
            <h1 className={styles.boxheader}>Voting Websites</h1>
            <VotingWebsites websites={votingWebsitesData} />
        </div>
    );
};

export default VotingWebsitesPage;
