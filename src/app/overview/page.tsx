'use client';

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

export default function Overview() {
    const data = [
        {
            checked_out: "Dangerous Chemical, Chemical X, Chemical ???",
            person: "Mr. Llama",
        },
        {
            checked_out: "",
            person: "Mr. Pidgeon",
        },
        {
            checked_out: "Dog Cells",
            person: "Ms. Eagle",
        },
        {
            checked_out: "Kryptonite",
            person: "John",
        },
        {
            checked_out: "Mr. Steven's Growing Tissue, Cells of Mr. Pig",
            person: "Ms. Fish",
        },
        {
            checked_out: "",
            person: "Mr. Pig",
        },
        {
            checked_out: "",
            person: "Mr. Steven",
        },
    ]

    const columns = useMemo(
        () => [
            {
                accessorKey: 'person',
                header: 'Person',
            },
            {
                accessorKey: 'checked_out',
                header: 'Checked Out Materials',
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
