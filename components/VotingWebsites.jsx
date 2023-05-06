import React from 'react';

const VotingWebsites = ({ websites }) => {
    return (
        <ul>
            {websites.map((website) => (
                <li key={website.id}>
                    <a href={website.url} target="_blank" rel="noopener noreferrer">
                        {website.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default VotingWebsites;