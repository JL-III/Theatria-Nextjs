// components/VotingWebsites.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const VotingWebsites = ({ websites }) => {
    return (
        <ul>
            {websites.map((website) => (
                <li key={website.id}>
                    <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=' active:text-dark-purple'
                    >
                        {website.name} <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default VotingWebsites;
