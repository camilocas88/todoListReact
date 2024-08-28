import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles.filtersContainer}>
      <button
        className={`${styles.filterButton} ${currentFilter === 'all' ? styles.filterButtonActive : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={`${styles.filterButton} ${currentFilter === 'pending' ? styles.filterButtonActive : ''}`}
        onClick={() => onFilterChange('pending')}
      >
        Pending
      </button>
      <button
        className={`${styles.filterButton} ${currentFilter === 'completed' ? styles.filterButtonActive : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;