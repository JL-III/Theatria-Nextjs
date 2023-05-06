// components/ExpandableRow.js
import { useState, useEffect } from 'react';
import styles from '../css/expandablerow.module.css';

const ExpandableRow = ({ title, items, backgroundColor, isAllExpanded }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setIsExpanded(isAllExpanded);
    }, [isAllExpanded]);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <>
            <tr onClick={toggleExpanded} className={`${styles.rowHover}`} style={{ backgroundColor }}>
                <td colSpan={11} className={styles.rowTd}>
                    <strong>{title}</strong>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan={11} className={styles.rowTd} style={{ backgroundColor }}>
                        <ul>
                            {items.map((item) => (
                                <li key={item.key}>{item.label}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
            )}
        </>
    );
};

export default ExpandableRow;
