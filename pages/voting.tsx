// pages/voting-websites.js
import React from 'react';
import VotingWebsites from '../components/VotingWebsites';
import Layout from '../components/Layout';
import votingWebsitesData from '../data/votingWebsites.json';
import styles from '../css/voting.module.css';

const VotingWebsitesPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Voting Websites</h1>
            <VotingWebsites websites={votingWebsitesData} />
        </div>
    );
};

export default VotingWebsitesPage;
