'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderOpen, Users, Briefcase, Settings, HelpCircle, LogOut } from 'lucide-react';
import styles from './Sidebar.module.css';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Category Management', icon: FolderOpen, path: '/categories' },
  { name: 'Users', icon: Users, path: '/users' },
  { name: 'Services', icon: Briefcase, path: '/services' }, // Note: Services page wasn't explicitly requested but is in menu
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoAvatar}></div>
        <div className={styles.logoText}>
          <h1 className={styles.brandName}>Admin Panel</h1>
          <p className={styles.brandSubtitle}>Dual Service Model</p>
        </div>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <Link href="/help" className={styles.navItem}>
          <HelpCircle size={20} />
          <span>Help Center</span>
        </Link>
        <button className={styles.logoutButton}>
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
