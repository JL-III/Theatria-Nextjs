// RanksPage.tsx
import Head from 'next/head';
import RankRow from '../components/RankRow';
import RowHeader from '../components/RowHeader'; // Add this import
import ranksData from '../data/ranks.json';
import styles from '../css/ranks.module.css';
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
                <button onClick={toggleExpandAll} className={styles.expandAllButton}>
                    {isAllExpanded ? 'Collapse All' : 'Expand All'}
                </button>
                <table className={styles.table}>
                    <RowHeader />
                    <tbody>
                    {ranksData.map((rank) => (
                        <RankRow key={rank.id} rank={rank} isExpanded={isAllExpanded} />
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default RanksPage;
