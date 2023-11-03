import querystring from 'querystring'

export interface DatabaseResponse<T> {
    error: number,
    message: string,
    data: T
}

export interface Cell<T> {
    key: string,
    value: T
}

export class Row {
    data: Map<string, any>

    constructor(...rows: Cell<any>[]) {
        const _data: Map<string, any> = new Map<string, any>()

        rows.forEach(cell => {
            _data.set(cell.key, cell.value);
        })

        this.data = _data;
    }

    public setCell(columnName: string, value: any): void {
        this.data.set(columnName, value)
    }

    public getCell(columnName: string): any {
        return this.data.get(columnName)
    }

    public toString(removeNull: boolean = false): string {
        let pairs: string[] = [];
        this.data.forEach((value, key) => {
            if (!(removeNull && !value)) pairs.push(`${key},${value}`)
        })
        return pairs.join(';')
    }
}

export default class Database {
    static requestUrl: string = "https://localhost:8080/api/";

    // `GET/token=${token}&table=${tableName}`
    // TODO: Implement Connection To Webserver
    public static async getTable(token: string, tableName: string): Promise<DatabaseResponse<Row[]>> {
        const query = `GET/${querystring.stringify({token: token, table: tableName})}`
        const response = await fetch(this.requestUrl.concat(query));
        const json = await response.json();

        return new Promise<DatabaseResponse<Row[]>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: [...json.data]
            })
        })
    }

    // `GET/token=${token}&table=${tableName}&column=${columnName}&unique=${unique}`
    // TODO: Implement Connection To Webserver
    public static async getColumn(token: string, tableName: string, columnName: string, unique: boolean = false): Promise<DatabaseResponse<string[]>> {
        const query = `GET/${querystring.stringify({token: token, table: tableName, column: columnName, unique: unique})}`
        const response = await fetch(this.requestUrl.concat(query));
        const json = await response.json();

        return new Promise<DatabaseResponse<string[]>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: [...json.data]
            })
        })
    }

    // `POST/token=${token}&table=${tableName}&insert=${column,cell;column,cell}`
    // TODO: Implement Connection To Webserver
    public static async postRow(token:string, tableName: string, row: Row): Promise<DatabaseResponse<void>> {
        const query = `POST/${querystring.stringify({token: token, table: tableName, insert: row.toString()})}`
        const response = await fetch(this.requestUrl.concat(query));
        const json = await response.json();

        return new Promise<DatabaseResponse<void>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: void[]
            })
        })
    }

    // `PUT/token=${token}&table=${tableName}&where=${column,cell;column,cell}&update=$(column,cell;column,cell)`
    // TODO: Implement Connection To Webserver
    public static async putRow(token:string, tableName: string, conditionalRow: Row, row: Row): Promise<DatabaseResponse<void>> {
        const query = `put/${querystring.stringify({token: token, table: tableName, where: conditionalRow.toString(), update: row.toString(true)})}`
        const response = await fetch(this.requestUrl.concat(query));
        const json = await response.json();

        return new Promise<DatabaseResponse<void>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: void[]
            })
        })
    }

    // `DELETE/token=${token}&table=${tableName}&where=${column,cell;column,cell}`
    // TODO: Implement Connection To Webserver
    public static async deleteRows(token: string, tableName: string, conditionalRow: Row): Promise<DatabaseResponse<Row[]>> {
        const query = `DELETE/${querystring.stringify({token: token, table: tableName, where: conditionalRow.toString()})}`
        const response = await fetch(this.requestUrl.concat(query));
        const json = await response.json();

        return new Promise<DatabaseResponse<Row[]>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: [...json.data]
            })
        })
    }
}