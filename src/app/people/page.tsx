'use client';

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

export default function Data() {
    const data = [
        {
            id: 1,
            person: "Mr. Llama",
        },
        {
            id: 2,
            person: "Mr. Pidgeon",
        },
        {
            id: 3,
            person: "Ms. Eagle",
        },
        {
            id: 4,
            person: "John",
        },
        {
            id: 5,
            person: "Ms. Fish",
        },
        {
            id: 6,
            person: "Mr. Pig",
        },
        {
            id: 7,
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
        muiTablePaperProps: {
            elevation: 0,
        },
    });

    return (
        <div className="tab">
            <MaterialReactTable table={table}/> 
        </div>
    );
}
