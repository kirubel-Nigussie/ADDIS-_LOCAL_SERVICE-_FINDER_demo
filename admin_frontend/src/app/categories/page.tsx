'use client';

import { useState } from 'react';
import { Search, Plus, ChevronRight, ChevronDown, GripVertical } from 'lucide-react';
import Badge from '@/components/UI/Badge';
import styles from './page.module.css';

// Mock data
const categories = [
    {
        id: 1,
        name: 'Home Services',
        status: 'active',
        subcategories: [
            { id: 11, name: 'Cleaning', status: 'active' },
            { id: 12, name: 'Plumbing', status: 'active' },
        ]
    },
    {
        id: 2,
        name: 'Personal Care',
        status: 'active',
        subcategories: []
    },
    {
        id: 3,
        name: 'Tech & Electronics',
        status: 'inactive', // Using 'inactive' which maps to red badge
        subcategories: []
    },
    {
        id: 4,
        name: 'Events & Planning',
        status: 'active',
        subcategories: []
    },
];

export default function CategoryManagement() {
    const [expanded, setExpanded] = useState<number[]>([1]); // Default expand first one

    const toggleExpand = (id: number) => {
        setExpanded(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <div className={styles.breadcrumbs}>Home / Category Management</div>
                    <h1 className={styles.pageTitle}>Category Management</h1>
                </div>
                <button className={styles.createButton}>
                    <Plus size={20} />
                    Create New Category
                </button>
            </div>

            <div className={styles.controls}>
                <div className={styles.tabs}>
                    <button className={`${styles.tab} ${styles.activeTab}`}>Task-Based Services</button>
                    <button className={styles.tab}>Contract-Based Services</button>
                </div>
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search for a category"
                        className={styles.searchInput}
                    />
                </div>
            </div>

            <div className={styles.categoryList}>
                {categories.map((category) => (
                    <div key={category.id} className={styles.categoryGroup}>
                        <div className={styles.categoryRow}>
                            <div className={styles.rowLeft}>
                                <GripVertical className={styles.dragHandle} size={20} />
                                <button onClick={() => toggleExpand(category.id)} className={styles.expandButton}>
                                    {expanded.includes(category.id) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                </button>
                                <span className={styles.categoryName}>{category.name}</span>
                                <Badge variant={category.status === 'active' ? 'active' : 'inactive'}>
                                    {category.status === 'active' ? 'Active' : 'Inactive'}
                                </Badge>
                            </div>
                        </div>

                        {expanded.includes(category.id) && category.subcategories.length > 0 && (
                            <div className={styles.subcategories}>
                                {category.subcategories.map((sub) => (
                                    <div key={sub.id} className={styles.categoryRow}>
                                        <div className={styles.rowLeft}>
                                            <GripVertical className={styles.dragHandle} size={20} />
                                            <span className={styles.spacer} /> {/* Indent */}
                                            <span className={styles.categoryName}>{sub.name}</span>
                                            <Badge variant={sub.status === 'active' ? 'active' : 'inactive'}>
                                                {sub.status === 'active' ? 'Active' : 'Inactive'}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
