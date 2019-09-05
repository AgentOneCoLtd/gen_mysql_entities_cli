import { query, QueryResult } from '@ag1/mysql_rx_wrapper';
import { Connection } from 'mysql';
import { Observable } from 'rxjs';

const sql = `
SELECT TABLE_NAME
FROM information_schema.tables
WHERE table_type='BASE TABLE'
AND table_schema like DATABASE()
;`;

export interface IGetAllTablesResult {
    TABLE_NAME: string;
}
export function getAllTables(connection: Connection): Observable<QueryResult<IGetAllTablesResult[]>> {
    return query<IGetAllTablesResult[]>({ sql, connection });
}
