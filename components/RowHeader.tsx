// components/RowHeader.tsx
import styles from '../pages/ranks.module.css';
import rankFields from '../pages/rankFields';

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
