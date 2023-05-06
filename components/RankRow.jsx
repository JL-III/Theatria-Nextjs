import { useState, useEffect } from 'react';
import styles from '../css/ranks.module.css';
import rankFields from "../data/rankFields";
import ExpandableRow from "../components/ExpandableRow";

const RankRow = ({ rank, className, isExpanded }) => {
    const [expanded, setExpanded] = useState(isExpanded);

    useEffect(() => {
        setExpanded(isExpanded);
    }, [isExpanded]);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const commands = Object.entries(rank.commands).map(([key, value]) => ({
        key,
        label: `${key}: ${typeof value === 'string' ? value : ''}`,
    }));

    const locks = [
        { key: 'default', label: `Default: ${rank.locks.default}` },
        { key: 'chest', label: `Chest: ${rank.locks.chest}` },
    ];

    const kits = Object.entries(rank.kits).map(([key, value]) => ({
        key,
        label: `${key}: ${typeof value === 'string' ? value : ''}`,
    }));

    return (
        <>
            <tr onClick={toggleExpanded} className={`${styles.localTrHover} ${className}`}>
                {rankFields.map((field) => {
                    const value =
                        field.isButton
                            ? 'Expand'
                            : rank[field.key] === 'false'
                                ? ''
                                : rank[field.key] === 'true'
                                    ? 'Yes'
                                    : rank[field.key];
                    return (
                        <td key={field.key} className={styles.localTd}>
                            {value}
                        </td>
                    );
                })}
            </tr>
            {expanded && (
                <>
                    <ExpandableRow title="Commands" items={commands} backgroundColor="#a11225" />
                    <ExpandableRow title="Kits" items={kits} backgroundColor="#a11225" />
                </>
            )}
        </>
    );
};

export default RankRow;