import styles from './Table.module.css';

interface TableProps {
    headers: string[];
    children: React.ReactNode;
}

export default function Table({ headers, children }: TableProps) {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className={styles.th}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}
