import styles from './Badge.module.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'active' | 'inactive' | 'pending' | 'finder' | 'provider' | 'rejected' | 'suspended';
}

export default function Badge({ children, variant = 'active' }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[variant]}`}>
            {children}
        </span>
    );
}
