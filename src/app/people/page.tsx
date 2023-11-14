import Table from '@/components/Table';
import Database, { Row } from '@/util/Database';
import React from 'react';

export default function Data() {
    /*const data: any[] = [
        {
            id: 1,
            person: "Mr. Llama",
        },
        {
            id: 2,
            person: "Mr. Pidgeon",
        },
        {
            id: 3,
            person: "Ms. Eagle",
        },
        {
            id: 4,
            person: "John",
        },
        {
            id: 5,
            person: "Ms. Fish",
        },
        {
            id: 6,
            person: "Mr. Pig",
        },
        {
            id: 7,
            person: "Mr. Steven",
        },
    ]*/

    let data: Row[] = []
    Database.getTable("", "people").then((res) => {
        if (res.error == 0) {
            data = res.data
        }
    })

    return (
        <div className="tab">
            <Table data={data} />
        </div>
    );
}
