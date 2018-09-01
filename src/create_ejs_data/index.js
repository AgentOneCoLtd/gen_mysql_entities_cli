"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const change_case_1 = require("change-case");
const rxjs_1 = require("rxjs");
const get_ts_type_1 = require("../get_ts_type");
const is_optional_1 = require("../is_optional");
function normalizeRawColumn(r) {
    return {
        columnName: r.COLUMN_NAME,
        tsType: get_ts_type_1.getTsType(r.DATA_TYPE, r.column_type, r.IS_NULLABLE),
        maxLength: r.CHARACTER_MAXIMUM_LENGTH,
        columnType: r.column_type,
        isOptional: is_optional_1.isOptional({
            isNullable: r.IS_NULLABLE,
            columnDefault: r.COLUMN_DEFAULT,
            isIdentity: r.IsIdentity,
        }),
        isNullable: r.IS_NULLABLE === 'YES',
    };
}
exports.normalizeRawColumn = normalizeRawColumn;
function createEjsData(rawColumns) {
    const tableName = rawColumns[0].TABLE_NAME;
    const columns = rawColumns.map(normalizeRawColumn);
    return rxjs_1.of({
        tableName,
        PascalTableName: change_case_1.pascalCase(tableName),
        columns,
    });
}
exports.createEjsData = createEjsData;
