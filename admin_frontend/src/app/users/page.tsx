import { Search, Plus, ChevronDown, Filter, MoreHorizontal } from 'lucide-react';
import Badge from '@/components/UI/Badge';
import Table from '@/components/UI/Table';
import styles from './page.module.css';

// Mock data
const users = [
    { id: 1, name: 'John Doe', handle: '@johndoe', email: 'john.doe@example.com', signup: '2023-01-15', login: '2023-10-26', status: 'active' },
    { id: 2, name: 'Jane Smith', handle: '@janesmith', email: 'jane.smith@example.com', signup: '2023-02-20', login: '2023-09-12', status: 'suspended' },
    { id: 3, name: 'Alex Johnson', handle: '@alexjohnson', email: 'alex.johnson@example.com', signup: '2023-03-05', login: '2023-10-20', status: 'active' },
    { id: 4, name: 'Emily Carter', handle: '@emilycarter', email: 'emily.carter@example.com', signup: '2023-04-11', login: '2023-08-01', status: 'deactivated' },
];

export default function UserManagement() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.pageTitle}>User Management (Client)</h1>
                    <p className={styles.subtitle}>Manage client accounts and their status.</p>
                </div>
                <button className={styles.createButton}>
                    <Plus size={20} />
                    Add New Client
                </button>
            </div>

            <div className={styles.filters}>
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, email, or user ID..."
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <button className={styles.filterButton}>
                        Status: All <ChevronDown size={16} />
                    </button>
                    <button className={styles.filterButton}>
                        <Filter size={16} /> Filters
                    </button>
                </div>
            </div>

            <Table headers={['', 'USER NAME', 'EMAIL', 'SIGNUP DATE', 'LAST LOGIN', 'STATUS', '']}>
                {users.map((user) => (
                    <tr key={user.id} className={styles.row}>
                        <td className={styles.cell}>
                            <input type="checkbox" className={styles.checkbox} />
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.userInfo}>
                                <div className={styles.avatar}></div> {/* Placeholder for avatar image */}
                                <div className={styles.userDetails}>
                                    <span className={styles.userName}>{user.name}</span>
                                    <span className={styles.userHandle}>{user.handle}</span>
                                </div>
                            </div>
                        </td>
                        <td className={styles.cell}>{user.email}</td>
                        <td className={styles.cell}>{user.signup}</td>
                        <td className={styles.cell}>{user.login}</td>
                        <td className={styles.cell}>
                            <Badge variant={user.status as 'active' | 'suspended' | 'inactive'}>
                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </Badge>
                        </td>
                        <td className={styles.cell}>
                            <button className={styles.actionButton}>
                                <MoreHorizontal size={20} />
                            </button>
                        </td>
                    </tr>
                ))}
            </Table>

            <div className={styles.pagination}>
                <span className={styles.showingText}>Showing 1-4 of 100</span>
                <div className={styles.pageControls}>
                    <button className={styles.pageButton}>Previous</button>
                    <button className={styles.pageNumber}>1</button>
                    <button className={styles.pageNumber}>2</button>
                    <button className={`${styles.pageNumber} ${styles.activePage}`}>3</button>
                    <span className={styles.ellipsis}>...</span>
                    <button className={styles.pageButton}>Next</button>
                </div>
            </div>
        </div>
    );
}
