import styles from '../../styles/modules/sectionVp1.module.css';

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    if (totalPages === 0) return null;
    return (
        <div className={styles.pagination}>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                {'<'}
            </button>
            {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                    <button key={page} onClick={() => onPageChange(page)} className={page === currentPage ? styles.activePage : ''}>
                        {page}
                    </button>
                );
            })}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                {'>'}
            </button>
        </div>
    );
};
