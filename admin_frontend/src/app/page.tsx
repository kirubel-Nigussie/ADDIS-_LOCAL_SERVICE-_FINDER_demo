import { Search } from 'lucide-react';
import Card from '@/components/UI/Card';
import Table from '@/components/UI/Table';
import Badge from '@/components/UI/Badge';
import styles from './page.module.css';

// Mock data for suspended users
const suspendedUsers = [
  { id: '#8A34F', name: 'Johnathan Doe', type: 'Finder', date: '2023-10-26' },
  { id: '#B29EG', name: 'Jane Smith', type: 'Provider', date: '2023-10-25' },
  { id: '#C54DH', name: 'Samuel Pine', type: 'Provider', date: '2023-10-22' },
  { id: '#F90LK', name: 'Emily Carter', type: 'Finder', date: '2023-10-20' },
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Dashboard</h1>

      <div className={styles.metricsGrid}>
        <Card title="Total Service Finders" value="1,482" />
        <Card title="Total Service Providers" value="359" />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Currently Suspended Users</h2>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search users..."
              className={styles.searchInput}
            />
          </div>
        </div>

        <Table headers={['USER ID', 'NAME', 'USER TYPE', 'SUSPENSION DATE', 'ACTIONS']}>
          {suspendedUsers.map((user) => (
            <tr key={user.id} className={styles.row}>
              <td className={styles.cell}>{user.id}</td>
              <td className={styles.cell}>
                <span className={styles.userName}>{user.name}</span>
              </td>
              <td className={styles.cell}>
                <Badge variant={user.type.toLowerCase() as 'finder' | 'provider'}>
                  {user.type}
                </Badge>
              </td>
              <td className={styles.cell}>{user.date}</td>
              <td className={styles.cell}>
                <button className={styles.actionButton}>Un-suspend</button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
