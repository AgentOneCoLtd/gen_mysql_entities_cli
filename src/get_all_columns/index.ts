import { query, QueryResult } from '@ag1/mysql_rx_wrapper';
import { Connection, escape } from 'mysql';
import { Observable } from 'rxjs';

export function getSql(tableName: string): string {
    return `
    SELECT TABLE_NAME,COLUMN_NAME,COLUMN_DEFAULT,IS_NULLABLE,
    DATA_TYPE,CHARACTER_MAXIMUM_LENGTH,NUMERIC_PRECISION,NUMERIC_SCALE,
    CASE WHEN EXTRA like '%auto_increment%' THEN 1 ELSE 0 END IsIdentity, column_type, column_key
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA like DATABASE()
    AND
    TABLE_NAME = ${escape(tableName)}
    ;`;
}

export interface IGetAllColumnsResult {
    TABLE_NAME: string;
    COLUMN_NAME: string;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    COLUMN_DEFAULT: any;
    IS_NULLABLE: 'NO' | 'YES';
    DATA_TYPE: string;
    CHARACTER_MAXIMUM_LENGTH: number | null;
    NUMERIC_PRECISION: number | null;
    NUMERIC_SCALE: number | null;
    IsIdentity: 0 | 1;
    column_type?: string; // mysql 5.6
    COLUMN_TYPE?: string; // mysql 8.0
    column_key?: string; // mysql 5.6
    COLUMN_KEY?: string; // mysql 8.0
}
export function getAllColumns(
    tableName: string,
    connection: Connection,
): Observable<QueryResult<IGetAllColumnsResult[]>> {
    const sql = getSql(tableName);

    return query<IGetAllColumnsResult[]>({ sql, connection });
}
