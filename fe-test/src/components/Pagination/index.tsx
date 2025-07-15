import React from "react";
import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxPageButtons?: number; // fefault 7
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxPageButtons = 7,
}: PaginationProps): React.ReactElement | null {
  if (totalPages === 0) return null;

  const half = Math.floor(maxPageButtons / 2);
  let startPage = Math.max(1, currentPage - half);
  let endPage = Math.min(totalPages, currentPage + half);

  if (endPage - startPage + 1 < maxPageButtons) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const renderPageButton = (page: number) => (
    <button
      key={page}
      className={cx("pagination__page-btn", {
        "pagination__page-btn--active": page === currentPage,
      })}
      onClick={() => onPageChange(page)}
      aria-current={page === currentPage ? "page" : undefined}
      disabled={page === currentPage}
      type="button"
    >
      {page}
    </button>
  );

  return (
    <nav className={cx("pagination")} aria-label="Pagination Navigation">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
        className={cx("pagination__nav-btn")}
        type="button"
      >
        {"<<"}
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className={cx("pagination__nav-btn")}
        type="button"
      >
        Prev
      </button>

      {startPage > 1 && (
        <>
          {renderPageButton(1)}
          {startPage > 2 && <span className={cx("pagination__dots")}>...</span>}
        </>
      )}

      {pageNumbers.map(renderPageButton)}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className={cx("pagination__dots")}>...</span>
          )}
          {renderPageButton(totalPages)}
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className={cx("pagination__nav-btn")}
        type="button"
      >
        Next
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Go to last page"
        className={cx("pagination__nav-btn")}
        type="button"
      >
        {">>"}
      </button>
    </nav>
  );
}

export default Pagination;
