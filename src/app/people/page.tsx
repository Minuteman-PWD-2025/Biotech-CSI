import Table from '@/components/Table';
import Database, { Row } from '@/util/Database';
import React from 'react';

export default function Data({ token = "token" }: { token: string }) {
    let data: Row[] = []
    Database.getTable(token, "people").then((res) => {
        data = res.data
        console.log(res)
    })

    return (
        <div className="tab">
            <Table data={data} />
        </div>
    );
}
