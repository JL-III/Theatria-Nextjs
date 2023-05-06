import React, { useState } from 'react';
import styles from '../pages/ranks.module.css';
import rankFields from "../pages/rankFields";

const RankRow = ({ rank, className }) => {
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
                    <td colSpan="11" className={styles.localTd}>
                        <div>
                            <h3>Commands:</h3>
                            <ul>
                                {Object.entries(rank.commands).map(([key, value]) => (
                                    <li key={key}>
                                        {key}: {value}
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
                                        {key}: {value}
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
