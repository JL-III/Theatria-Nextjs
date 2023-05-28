// RanksPage.tsx
import Head from 'next/head';
import RankRow from '../components/RankRow';
import RowHeader from '../components/RowHeader'; // Add this import
import ranksData from '../data/ranks.json';
import { useState } from 'react';


const RanksPage = () => {
    const [isAllExpanded, setIsAllExpanded] = useState(false);

    const toggleExpandAll = () => {
        setIsAllExpanded(!isAllExpanded);
    };

    return (
        <div>
            <Head>
                <title>Ranks</title>
            </Head>
            <main>
                <h1>Ranks</h1>
                <button onClick={toggleExpandAll} className=''>
                    {isAllExpanded ? 'Collapse All' : 'Expand All'}
                </button>
                <div >
                    <table className='min-w-full border-collapse bg-light-purple'>
                        <RowHeader />
                        <tbody>
                            {ranksData.map((rank) => (
                                <RankRow key={rank.id} rank={rank} isExpanded={isAllExpanded} isAllExpanded={isAllExpanded} />
                            ))}
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    );
};

export default RanksPage;
