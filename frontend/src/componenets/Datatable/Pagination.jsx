import React from 'react'
import classNames from "classnames";
import Icon from '../ui-elements/Icon';

function Pagination({table}) {
    const pageNumbers = [];
    for (let i = 1; i <= table.getPageCount(); i++) {
        pageNumbers.push(i);
    }
    const paginationNumber = () => {
        if (pageNumbers.length <= 3) {
            return pageNumbers;
        } else if (
            pageNumbers.length >= 2 &&
            table.getState().pagination.pageIndex + 1 <= 2
        ) {
            return [1, 2, 3, "blank", pageNumbers[pageNumbers.length - 1]];
        } else if (
            pageNumbers.length >= 3 &&
            table.getState().pagination.pageIndex + 1 >=
                pageNumbers[pageNumbers.length - 2]
        ) {
            return [
                1,
                "blank",
                pageNumbers[pageNumbers.length - 3],
                pageNumbers[pageNumbers.length - 2],
                pageNumbers[pageNumbers.length - 1],
            ];
        } else if (
            pageNumbers.length > 3 &&
            table.getState().pagination.pageIndex + 1 > 2 &&
            table.getState().pagination.pageIndex + 1 <
                pageNumbers[pageNumbers.length - 2]
        ) {
            return [
                "blank",
                table.getState().pagination.pageIndex + 1 - 1,
                table.getState().pagination.pageIndex + 1,
                table.getState().pagination.pageIndex + 1 + 1,
                "blank",
            ];
        }
    };
    let paginationItems = paginationNumber();

  return (
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
        <PageButton
            icon
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
        >
            <Icon className="rtl:-scale-x-100" name="chevron-left"></Icon>
        </PageButton>
        {paginationItems.map((number, index) => (
            <PageButton
                key={index}
                current={
                    number - 1 ===
                    table.getState().pagination.pageIndex
                }
                onClick={() => table.setPageIndex(number - 1)}
                icon={number === "blank"}
                disabled={number === "blank"}
            >
                {number !== "blank" ? (
                    number
                ) : (
                    <Icon name="more-h"></Icon>
                )}
            </PageButton>
        ))}
        <PageButton
            icon
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
        >
            <Icon className="rtl:-scale-x-100" name="chevron-right"></Icon>
        </PageButton>
    </nav>
  )
}

export default Pagination

function PageButton({ icon, current, disabled, children, onClick }) {
    const compClass = classNames({
        "relative inline-flex items-center text-sm/[22px] font-normal focus:z-20 border first:rounded-s last:rounded-e": true,
        ["text-slate-600 dark:text-slate-200 hover:bg-slate-100 hover:dark:bg-slate-900"]: !current && !disabled,
        ["border-gray-200 dark:border-gray-800"]: !current,
        ["text-slate-400 dark:text-slate-600 pointer-events-none"]: disabled,
        ["bg-primary-600 hover:bg-primary-600 text-white border-primary-600 z-20"]:
            current,
        ["px-3 py-1.5"]: icon,
        ["px-3.5 py-1.5"]: !icon,
    });
    return (
        <button className={compClass} onClick={onClick}>
            {children}
        </button>
    );
}