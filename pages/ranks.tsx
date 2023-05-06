// RanksPage.tsx
import Head from 'next/head';
import RankRow from '../components/RankRow';
import RowHeader from '../components/RowHeader'; // Add this import
import ranksData from '../data/ranks.json';
import styles from './ranks.module.css';


const RanksPage = () => {
    return (
        <div>
            <Head>
                <title>Ranks</title>
            </Head>
            <main>
                <h1>Ranks</h1>
                <table className={styles.table}>
                    <RowHeader />
                    <tbody>
                    {ranksData.map((rank, index) => (
                        <RankRow key={rank.id} rank={rank} isEven={index % 2 === 0} />
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default RanksPage;
