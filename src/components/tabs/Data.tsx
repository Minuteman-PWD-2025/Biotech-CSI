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
    values: string[];
}

const Row: React.FC<RowProps> = ({ values }) => {
    return (
        <div className="row">
            {values.map((value, index) =>
                <DataEntry key={index} value={value} />
            )}
        </div>
    );
}

interface DataProps {
    data: string[][];
}

export default function Data({ data = [] }: DataProps) {
    return (
        <div className="data-tab">
            {data.map((RowValues, index) =>
                <Row key={index} values={RowValues} />
            )}
        </div>
    );
}
