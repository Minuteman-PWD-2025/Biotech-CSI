'use client';

import { Row } from '@/util/Database';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

export default function Table({ data = []}: { data: Row[] }) {
    const keys: Array<string> = (() => {
        const res: string[] = []
        
        return res
    })()
    const pairs: Array<{accessorKey: string, header: string}> = keys.map(val => {
        return {accessorKey: val, header: val}
    })
    const columns = useMemo(
        () => [
            ...pairs
        ],
        [],
    );

    // An error has occurred- say it on the table that something went wrong.
    if (keys.length == 0) {
        
    }

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
            <MaterialReactTable table={table} />
        </div>
    );
}
