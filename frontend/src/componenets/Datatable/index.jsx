import React, { useState } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Pagination from "./Pagination";

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table";

function DataTable({ columns, tableData }) {
    const [data, setData] = useState(() => [...tableData]);
    const [globalFilter, setGlobalFilter] = useState("");

    // Update the state when input changes
    const handleFilterChange = (e) => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
    };

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    });
    const pageSizeSelect = [
        { name: 10 },
        { name: 20 },
        { name: 50 },
        { name: 100 },
    ];
    const [selected, setSelected] = useState(pageSizeSelect[1]);

    return (
        <>
            <div className="pb-4 flex gap-3 items-center justify-between">
                <div className="w-full xs:w-64">
                    <Input
                        value={globalFilter}
                        onChange={handleFilterChange}
                        placeholder="Type in to Search"
                    />
                </div>
                <div className="flex items-center gap-x-3">
                    <div className="text-slate-500 dark:text-slate-300 text-sm hidden xs:block">
                        Show
                    </div>
                    <div className="w-20">
                        <Select
                            selected={selected}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value));
                                setSelected(e.target.value);
                            }}
                            >
                                {pageSizeSelect.map((item,index)=> {
                                    return(
                                        <option key={index} value={item.name}>{item.name}</option>
                                    )
                                })}
                        </Select>
                    </div>
                </div>
            </div>
            <div className="rounded border border-gray-200 dark:border-gray-800 overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                    <thead className="text-slate-600 dark:text-slate-200">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        className="text-start ps-5 pe-5 py-1"
                                        key={header.id}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className="ps-5 pe-5 py-2.5 border-t border-gray-200 dark:border-gray-800"
                                        key={cell.id}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div
                className={`pt-4 flex sm:items-center justify-between flex-col sm:flex-row gap-4`}
            >
                <Pagination table={table} />
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-300">
                    {table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1 - 1) + 1}
                    {" "}-{" "} 
                    {table.getFilteredRowModel().rows.length > table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1) ? table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1) : table.getFilteredRowModel().rows.length}{" "}
                    of{" "}{table.getFilteredRowModel().rows.length} 
                </span>
            </div>
        </>
    );
}

export default DataTable;
