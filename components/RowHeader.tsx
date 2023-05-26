// components/RowHeader.tsx
import styles from '../css/ranks.module.css';
import rankFields from '../data/rankFields';

const RowHeader = () => {
    return (
        <thead>
        <tr>
            {rankFields.map((field) => (
                <th key={field.key} className={styles.localTh}>
                    {field.label}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default RowHeader;
