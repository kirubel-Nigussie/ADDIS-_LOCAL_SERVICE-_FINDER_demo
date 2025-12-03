import styles from './Card.module.css';

interface CardProps {
    title: string;
    value: string | number;
    className?: string;
}

export default function Card({ title, value, className = '' }: CardProps) {
    return (
        <div className={`${styles.card} ${className}`}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.value}>{value}</p>
        </div>
    );
}
