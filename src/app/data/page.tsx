import { Kelly_Slab } from 'next/font/google';
import React from 'react';

interface DataEntryProps {
    value: string;
}

const DataEntry: React.FC<DataEntryProps> = ({ value }) => {
    return (
        <div className="data-entry">
            {value}
        </div>
    );
}

interface RowProps {
    is_headers: boolean;
    columns: string[];
    values: string[];
}

const Row: React.FC<RowProps> = ({ columns, values }) => {
    return (
        <div className="row" style={{
            // turns ["val1", "val2", "val3"] into "1fr 1fr 1fr"; Automatically sets column amount.
            gridTemplateColumns: columns.map(() =>"1fr").join(" ")
        }}>
            {columns.map((_, index) => { // we map `columns` instead of `values` so we always get the same amount of entries in each row.
                const value = values.at(index) ?? ""
                return <DataEntry key={index} value={value} />
            })}
        </div>
    );
}

interface DataProps {
    columns: string[]
    rows: string[][];
}

export default function Data() {
    /*const data: DataProps = {
        columns: [],
        rows: []
    }*/

    // This is sample data! The real `data` should be programmatically set.
    const data: DataProps = {
        columns: ["1", "2", "3", "4", "5"],
        rows: [
            ["x", "x", "x", "x"],
            ["x", "x", "", ""],
            ["x", "x", "x", "x", "x"],
            ["x", "", "x", "x"],
            ["x", "x", "x", ""],
            ["x", "x", "x", "x", "x"]
        ]
    };
    return (
        <div className="tab-data tab">
            {<Row is_headers={true} columns={data.columns} values={data.columns} />}
            {data.rows.map((value, index) =>
                <Row columns={data.columns} values={value} is_headers={false} />
            )}
        </div>
    );
}
