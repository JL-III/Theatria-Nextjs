// pages/voting-websites.js
import React from 'react';
import VotingWebsites from '../components/VotingWebsites';
import votingWebsitesData from '../data/votingWebsites.json';

const VotingWebsitesPage = () => {
    return (
        <div>
            <h1>Voting Sites</h1>
            <VotingWebsites websites={votingWebsitesData} />
        </div>
    );
};

export default VotingWebsitesPage;