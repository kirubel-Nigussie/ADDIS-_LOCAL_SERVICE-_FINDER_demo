import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Badge from '@/components/UI/Badge';
import Table from '@/components/UI/Table';
import styles from './page.module.css';

// Mock data
const providers = [
    { id: 1, name: 'John Doe', service: 'Plumbing', email: 'john.doe@example.com', joined: 'Jan 15, 2024', status: 'verified' },
    { id: 2, name: 'Jane Smith', service: 'Electrical', email: 'jane.smith@example.com', joined: 'Feb 01, 2024', status: 'pending' },
    { id: 3, name: 'Mike Ross', service: 'Landscaping', email: 'mike.ross@example.com', joined: 'Feb 10, 2024', status: 'rejected' },
    { id: 4, name: 'Sarah Connor', service: 'Cleaning', email: 'sarah.connor@example.com', joined: 'Feb 22, 2024', status: 'verified' },
    { id: 5, name: 'Alex Ray', service: 'HVAC', email: 'alex.ray@example.com', joined: 'Mar 05, 2024', status: 'pending' },
];

export default function ProviderManagement() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.pageTitle}>Provider Management</h1>
                    <p className={styles.subtitle}>Review, verify, and manage all service provider profiles.</p>
                </div>
                <button className={styles.createButton}>
                    <Plus size={20} />
                    Create Provider
                </button>
            </div>

            <div className={styles.filters}>
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, email, or ID..."
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <button className={styles.filterButton}>
                        Status: All <ChevronDown size={16} />
                    </button>
                    <button className={styles.filterButton}>
                        Service Type <ChevronDown size={16} />
                    </button>
                    <button className={styles.filterButton}>
                        Date Joined <ChevronDown size={16} />
                    </button>
                    <button className={styles.clearButton}>Clear Filters</button>
                </div>
            </div>

            <Table headers={['', 'PROVIDER NAME', 'SERVICE TYPE', 'EMAIL', 'DATE JOINED', 'STATUS', 'ACTIONS']}>
                {providers.map((provider) => (
                    <tr key={provider.id} className={styles.row}>
                        <td className={styles.cell}>
                            <input type="checkbox" className={styles.checkbox} />
                        </td>
                        <td className={styles.cell}>
                            <span className={styles.providerName}>{provider.name}</span>
                        </td>
                        <td className={styles.cell}>{provider.service}</td>
                        <td className={styles.cell}>{provider.email}</td>
                        <td className={styles.cell}>{provider.joined}</td>
                        <td className={styles.cell}>
                            <Badge variant={provider.status as 'active' | 'pending' | 'rejected'}>
                                {provider.status.charAt(0).toUpperCase() + provider.status.slice(1)}
                            </Badge>
                        </td>
                        <td className={styles.cell}>
                            <button className={styles.editButton}>Edit</button>
                        </td>
                    </tr>
                ))}
            </Table>

            <div className={styles.pagination}>
                <span className={styles.showingText}>Showing 1 to 5 of 97 results</span>
                <div className={styles.pageControls}>
                    <button className={styles.pageButton}><ChevronLeft size={16} /></button>
                    <button className={`${styles.pageButton} ${styles.activePage}`}>1</button>
                    <button className={styles.pageButton}>2</button>
                    <button className={styles.pageButton}>3</button>
                    <span className={styles.ellipsis}>...</span>
                    <button className={styles.pageButton}>8</button>
                    <button className={styles.pageButton}><ChevronRight size={16} /></button>
                </div>
            </div>
        </div>
    );
}
