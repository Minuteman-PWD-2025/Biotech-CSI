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
    requestUrl: string = "https://localhost:8080/api/";

    // `GET/table=${tableName}`
    public static async getTable(token: string, tableName: string): Promise<DatabaseResponse<Row[]>> {

        return {
            error: 0,
            message: "",
            data: []
        }
    }
    // `Get/table=${tableName}&column=${columnName}&unique=${unique}`
    public static async getColumn(token: string, tableName: string, columnName: string, unique: boolean = false): Promise<DatabaseResponse<string[]>> {


        return {
            error: 0,
            message: "",
            data: []
        }
    }

    // `POST/table=${tableName}&insert=${column,cell;column,cell}`
    public static async postRow(tableName: string, row: Row): Promise<DatabaseResponse<void>> {

        return {
            error: 0,
            message: "",
            data: void []
        }
    }
}