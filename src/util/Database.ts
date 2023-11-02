export interface DatabaseResponse<T> {
    error: number,
    message: string,
    data: T
}

export interface Row {
    data: string[][]
}

export default class Database {
    requestUrl: string = "https://localhost:8080/api/";

    // `GET/table=${tableName}`
    public async getTable(token: string, tableName: string): Promise<DatabaseResponse<Row[]>> {
        
        return {
            error: 0,
            message: "",
            data: []
        }
    }
    // `Get/table=${tableName}&column=${columnName}&unique=${unique}`
    public async getColumn(token: string, tableName: string, columnName: string, unique: boolean = false): Promise<DatabaseResponse<string[]>> {

        return {
            error: 0,
            message: "",
            data: []
        }
    }

    // `POST/table=${tableName}&insert=${column,cell;column,cell}`
    public async postRow(tableName: string, row: Row): Promise<DatabaseResponse<void>> {
        
        return {
            error: 0,
            message: "",
            data: void[]
        }
    }
}