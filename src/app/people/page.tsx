import Table from '@/components/Table';
import Database, { Row } from '@/util/Database';
import React from 'react';

export default async function Data({ token = "token" }: { token: string }) {
    let data: Row[] = (await Database.getTable(token, "people")).data

    return (
        <div className="tab">
            <Table data={data} />
        </div>
    );
}
