import { query } from '@ag1/mysql_rx_wrapper';
import { Connection } from 'mysql';

const sql = `
SELECT TABLE_NAME
FROM information_schema.tables
WHERE table_type='BASE TABLE'
AND table_schema like DATABASE()
;`;

export interface IGetAllTablesResult {
    TABLE_NAME: string;
}
export function getAllTables(connection: Connection) {
    return query<IGetAllTablesResult[]>({ sql, connection });
}
