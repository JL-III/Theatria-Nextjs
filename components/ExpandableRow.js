// components/ExpandableRow.js
import { useState, useEffect } from 'react';

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
            <tr onClick={toggleExpanded} className='' style={{ backgroundColor }}>
                <td colSpan={12} className=''>
                    <strong>{title}</strong>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan={12} className='' style={{ backgroundColor }}>
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
