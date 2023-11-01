'use client';
import { createTheme } from '@mui/material';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

export default function Data() {
    const data = [
        {
            id: 2594,
            person: "Mr. Llama",
        },
        {
            id: 2398,
            person: "Mr. Pidgeon",
        },
        {
            id: 1350,
            person: "Ms. Eagle",
        },
        {
            id: 9285,
            person: "John",
        },
        {
            id: 1835,
            person: "Ms. Fish",
        },
        {
            id: 6135,
            person: "Mr. Pig",
        },
        {
            id: 3560,
            person: "Mr. Steven",
        },
    ]

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
            },
            {
                accessorKey: 'person',
                header: 'Person',
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enablePagination: false, //disable a default feature
        enableBottomToolbar: false,
        enableSorting: true,
        columnFilterModeOptions: null,
        enableFullScreenToggle: false,
    });

    return (
        <div className="tab">
            <MaterialReactTable table={table}/> 
        </div>
    );
}
