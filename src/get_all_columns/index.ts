import { query } from '@ag1/mysql_rx_wrapper';
import { Connection, escape } from 'mysql';

export function getSql(tableName: string) {
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
    // tslint:disable-next-line no-any
    COLUMN_DEFAULT: any;
    IS_NULLABLE: 'NO' | 'YES';
    DATA_TYPE: string;
    CHARACTER_MAXIMUM_LENGTH: number | null;
    NUMERIC_PRECISION: number | null;
    NUMERIC_SCALE: number | null;
    IsIdentity: 0 | 1;
    column_type: string;
    column_key: string;
}
export function getAllColumns(tableName: string, connection: Connection) {
    const sql = getSql(tableName);

    return query<IGetAllColumnsResult[]>({ sql, connection });
}
