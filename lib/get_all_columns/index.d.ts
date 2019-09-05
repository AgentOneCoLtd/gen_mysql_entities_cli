import { QueryResult } from '@ag1/mysql_rx_wrapper';
import { Connection } from 'mysql';
import { Observable } from 'rxjs';
export declare function getSql(tableName: string): string;
export interface IGetAllColumnsResult {
    TABLE_NAME: string;
    COLUMN_NAME: string;
    COLUMN_DEFAULT: any;
    IS_NULLABLE: 'NO' | 'YES';
    DATA_TYPE: string;
    CHARACTER_MAXIMUM_LENGTH: number | null;
    NUMERIC_PRECISION: number | null;
    NUMERIC_SCALE: number | null;
    IsIdentity: 0 | 1;
    column_type?: string;
    COLUMN_TYPE?: string;
    column_key?: string;
    COLUMN_KEY?: string;
}
export declare function getAllColumns(tableName: string, connection: Connection): Observable<QueryResult<IGetAllColumnsResult[]>>;
//# sourceMappingURL=index.d.ts.map