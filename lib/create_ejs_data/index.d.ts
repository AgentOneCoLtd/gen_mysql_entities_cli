import { Observable } from 'rxjs';
import { IGetAllColumnsResult } from '../get_all_columns';
export declare function getMaxLength(dataType: string, characterMaximumLength: number | null): number | null;
export interface INormalizeRawColumnResult {
    columnName: string;
    tsType: string;
    maxLength: number | null;
    columnType: string;
    isOptional: boolean;
    isNullable: boolean;
}
export declare function normalizeRawColumn(r: IGetAllColumnsResult): INormalizeRawColumnResult;
export interface ICreateEjsDataResult {
    tableName: string;
    PascalTableName: string;
    columns: INormalizeRawColumnResult[];
}
export declare function createEjsData(rawColumns: IGetAllColumnsResult[]): Observable<ICreateEjsDataResult>;
//# sourceMappingURL=index.d.ts.map