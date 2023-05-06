import React, { useState } from 'react';
import styles from '../pages/ranks.module.css';
import rankFields from "../pages/rankFields";

interface RankRowProps {
    rank: {
        id: number;
        name: string;
        displayname: string;
        cost: string;
        chunks: number;
        "spawner-mine-chance": string;
        locks: {
            default: string;
            chest: string;
        };
        homes: string;
        commands: {
            "/own": string;
            // ...
            "kit spawner25"?: string;
        };
        kits: {
            // ...
        };
        "keep-exp": string;
        "keep-inv": string;
        // ...
    };
    className?: string;
    isEven?: boolean;
}

const RankRow: React.FC<RankRowProps> = ({ rank, className, isEven }) => {
    const [isExpanded, setIsExpanded] = useState(false);


    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <tr onClick={toggleExpanded} className={`${styles.localTrHover} ${className}`}>
                {rankFields.map((field) => {
                    const value = field.isButton ? "Expand" : rank[field.key] === "false" ? "" : rank[field.key] === "true" ? "Yes" : rank[field.key]
                    return (
                        <td key={field.key} className={styles.localTd}>
                            {value}
                        </td>
                    );
                })}
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan={11} className={styles.localTd}>
                        <div>
                            <h3>Commands:</h3>
                            <ul>
                                {Object.entries(rank.commands).map(([key, value]) => (
                                    <li key={key}>
                                        {key}: {typeof value === 'string' ? value : ''}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Locks:</h3>
                            <ul>
                                <li>Default: {rank.locks.default}</li>
                                <li>Chest: {rank.locks.chest}</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Kits:</h3>
                            <ul>
                                {Object.entries(rank.kits).map(([key, value]) => (
                                    <li key={key}>
                                        {key}: {typeof value === 'string' ? value : ''}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default RankRow;
