import rankFields from '../data/rankFields';

const RowHeader = () => {
    return (
        <thead className=''>
        <tr className=''>
            {rankFields.map((field) => (
                <th className='w-32 lg:w-auto flex-row justify-left lg:justify-center border-2 border-x-purple whitespace-nowrap px-2' key={field.key}>
                {field.label}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default RowHeader;
