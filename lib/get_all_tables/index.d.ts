import { QueryResult } from '@ag1/mysql_rx_wrapper';
import { Connection } from 'mysql';
import { Observable } from 'rxjs';
export interface IGetAllTablesResult {
    TABLE_NAME: string;
}
export declare function getAllTables(connection: Connection): Observable<QueryResult<IGetAllTablesResult[]>>;
//# sourceMappingURL=index.d.ts.map