'use client';

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

export default function Data() {
    const data = [
        {
            id: 1,
            item: "Dangerous Chemical",
        },
        {
            id: 2,
            item: "Chemical X",
        },
        {
            id: 3,
            item: "Chemical ???",
        },
        {
            id: 4,
            item: "Kryptonite",
        },
        {
            id: 5,
            item: "Dog Cells",
        },
        {
            id: 6,
            item: "Cells of Mr. Pig",
        },
        {
            id: 7,
            item: "Mr. Steven's Growing Tissue",
        },
    ]

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
            },
            {
                accessorKey: 'item',
                header: 'Item',
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
