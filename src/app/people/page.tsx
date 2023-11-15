import Table from '@/components/Table';
import Database, { Row } from '@/util/Database';
import React from 'react';

export default function Data() {
    let data: Row[] = []
    Database.getTable("g", "people").then((res) => {
        if (res.error == 0) {
            data = res.data
            console.log(res)
        }
    })

    return (
        <div className="tab">
            <Table data={data} />
        </div>
    );
}
