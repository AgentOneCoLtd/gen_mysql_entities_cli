import { pascalCase } from 'change-case';
import { of } from 'rxjs';
import { IGetAllColumnsResult } from '../get_all_columns';
import { getTsType } from '../get_ts_type';
import { isOptional } from '../is_optional';

export function normalizeRawColumn(r: IGetAllColumnsResult) {
    return {
        columnName: r.COLUMN_NAME,
        tsType: getTsType(r.DATA_TYPE, r.column_type, r.IS_NULLABLE),
        maxLength: r.CHARACTER_MAXIMUM_LENGTH,
        columnType: r.column_type,
        isOptional: isOptional({
            isNullable: r.IS_NULLABLE,
            columnDefault: r.COLUMN_DEFAULT,
            isIdentity: r.IsIdentity,
        }),
        isNullable: r.IS_NULLABLE === 'YES',
    };
}

export function createEjsData(rawColumns: IGetAllColumnsResult[]) {
    const tableName = rawColumns[0].TABLE_NAME;
    const columns = rawColumns.map(normalizeRawColumn);

    return of({
        tableName,
        PascalTableName: pascalCase(tableName),
        columns,
    });
}
