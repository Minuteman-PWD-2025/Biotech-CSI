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
}

export default class Database {
    static requestUrl: string = "https://localhost:8080/api/";

    // `GET/table=${tableName}`
    public static async getTable(token: string, tableName: string): Promise<DatabaseResponse<Row[]>> {
        const response = await fetch(this.requestUrl.concat(`GET/token=${token}&table=${tableName}`));
        const json = await response.json();

        return new Promise<DatabaseResponse<Row[]>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: [...json.data]
            })
        })
    }
    // `Get/table=${tableName}&column=${columnName}&unique=${unique}`
    public static async getColumn(token: string, tableName: string, columnName: string, unique: boolean = false): Promise<DatabaseResponse<string[]>> {
        const response = await fetch(this.requestUrl.concat(`GET/token=${token}&table=${tableName}&column=${columnName}&unique=${unique}`));
        const json = await response.json();

        return new Promise<DatabaseResponse<string[]>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: [...json.data]
            })
        })
    }

    // `POST/table=${tableName}&insert=${column,cell;column,cell}`
    public static async postRow(token:string, tableName: string, row: Row): Promise<DatabaseResponse<void>> {
        const response = await fetch(this.requestUrl.concat(`POST/token=${token}&table=${tableName}&insert=${row.data.forEach}`));
        const json = await response.json();

        return new Promise<DatabaseResponse<void>>(async resolve => {
            resolve({
                error: json.error,
                message: json.message,
                data: void[]
            })
        })
    }
}