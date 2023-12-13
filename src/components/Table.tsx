'use client';

import { Row } from '@/util/Database';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

export default function Table({ data = [] }: { data: Row[] }) {
    console.log(data)
    const getKeys = (): Array<string> => {
        const res: string[] = []

        data.forEach(row => {
            for (const key of Object.keys(row)) {
                if (!res.includes(key)) res.push(key)
            }
        })
        
        return res
    }
    
    const getPairs = (): Array<{accessorKey: string, header: string}> => {
        const keys = getKeys()
        const res: Array<{accessorKey: string, header: string}> = []

        for (const key of keys) {
            res.push({accessorKey: key, header: key})
        }

        return res
    }

    const columns = useMemo(
        () => [
            ...getPairs()
        ],
        [],
    );

    // An error has occurred- say it on the table that something went wrong.
    if (getKeys().length == 0) {
        
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
