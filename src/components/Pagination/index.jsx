import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

function Pagination({currentPage, setCurrentPage}) {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => setCurrentPage(e.selected + 1)}
            pageRangeDisplayed={currentPage}
            pageCount={5}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination;
