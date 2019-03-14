import { IGetAllColumnsResult } from '../get_all_columns';
export declare function normalizeRawColumn(r: IGetAllColumnsResult): {
    columnName: string;
    tsType: string;
    maxLength: number | null;
    columnType: string;
    isOptional: boolean;
    isNullable: boolean;
};
export declare function createEjsData(rawColumns: IGetAllColumnsResult[]): import("rxjs").Observable<{
    tableName: string;
    PascalTableName: string;
    columns: {
        columnName: string;
        tsType: string;
        maxLength: number | null;
        columnType: string;
        isOptional: boolean;
        isNullable: boolean;
    }[];
}>;
//# sourceMappingURL=index.d.ts.map