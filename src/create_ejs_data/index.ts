import { isNil } from '@ag1/nil';
import { returnSwitch } from '@ag1/return_switch';
import { pascalCase } from 'change-case';
import { of, Observable } from 'rxjs';
import { IGetAllColumnsResult } from '../get_all_columns';
import { getTsType } from '../get_ts_type';
import { isOptional } from '../is_optional';

export interface INormalizeRawColumnResult {
    columnName: string;
    tsType: string;
    maxLength: number | null;
    columnType: string;
    isOptional: boolean;
    isNullable: boolean;
}
export function normalizeRawColumn(r: IGetAllColumnsResult): INormalizeRawColumnResult {
    // in MySQL 5.6 it return as column_type
    // in MySQL 8.0 it return as COLUMN_TYPE
    const columnType = returnSwitch<string | undefined>(isNil(r.column_type))([
        [false, r.column_type],
        [true, r.COLUMN_TYPE],
    ]);
    if (isNil(columnType)) {
        throw new Error(`neither column_type nor COLUMN_TYPE have value: ${r}`);
    }

    return {
        columnName: r.COLUMN_NAME,
        tsType: getTsType(r.DATA_TYPE, columnType, r.IS_NULLABLE),
        maxLength: r.CHARACTER_MAXIMUM_LENGTH,
        columnType,
        isOptional: isOptional({
            isNullable: r.IS_NULLABLE,
            columnDefault: r.COLUMN_DEFAULT,
            isIdentity: r.IsIdentity,
        }),
        isNullable: r.IS_NULLABLE === 'YES',
    };
}

export interface ICreateEjsDataResult {
    tableName: string;
    PascalTableName: string;
    columns: INormalizeRawColumnResult[];
}
export function createEjsData(rawColumns: IGetAllColumnsResult[]): Observable<ICreateEjsDataResult> {
    const tableName = rawColumns[0].TABLE_NAME;
    const columns = rawColumns.map(normalizeRawColumn);

    return of({
        tableName,
        PascalTableName: pascalCase(tableName),
        columns,
    });
}
