import React from 'react';
import Box from '../components/Box'
import VotingWebsites from '../components/VotingWebsites';
import votingWebsitesData from '../data/votingWebsites.json';

const VotingWebsitesPage = () => {
    return (
        <Box>
            <h1 className='text-2xl mb-4 text-white'>Voting Websites</h1>
            <div>
                <VotingWebsites websites={votingWebsitesData} />
            </div>
        </Box>
    );
};

export default VotingWebsitesPage;
