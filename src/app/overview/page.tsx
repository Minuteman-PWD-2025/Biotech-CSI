import Table from '@/components/Table';
import Database, { Row } from '@/util/Database';
import { getCookie } from 'cookies-next';
import React from 'react';

export default async function Data({ token = "..."}: { token: string }) {
    let data: Row[] = (await Database.getTable(token, "people_items")).data

    return (
        <div className="tab">
            <Table data={data} />
        </div>
    );
}
