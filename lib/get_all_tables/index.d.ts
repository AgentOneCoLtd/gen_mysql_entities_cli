import { Connection } from 'mysql';
export interface IGetAllTablesResult {
    TABLE_NAME: string;
}
export declare function getAllTables(connection: Connection): import("rxjs").Observable<[IGetAllTablesResult[], import("mysql").FieldInfo[] | undefined]>;
//# sourceMappingURL=index.d.ts.map