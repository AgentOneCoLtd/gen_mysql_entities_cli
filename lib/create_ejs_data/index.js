"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nil_1 = require("@ag1/nil");
const return_switch_1 = require("@ag1/return_switch");
const change_case_1 = require("change-case");
const rxjs_1 = require("rxjs");
const get_ts_type_1 = require("../get_ts_type");
const is_optional_1 = require("../is_optional");
function normalizeRawColumn(r) {
    // in MySQL 5.6 it return as column_type
    // in MySQL 8.0 it return as COLUMN_TYPE
    const columnType = return_switch_1.returnSwitch(nil_1.isNil(r.column_type))([
        [false, r.column_type],
        [true, r.COLUMN_TYPE],
    ]);
    if (nil_1.isNil(columnType)) {
        throw new Error(`neither column_type nor COLUMN_TYPE have value: ${r}`);
    }
    return {
        columnName: r.COLUMN_NAME,
        tsType: get_ts_type_1.getTsType(r.DATA_TYPE, columnType, r.IS_NULLABLE),
        maxLength: r.CHARACTER_MAXIMUM_LENGTH,
        columnType,
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
//# sourceMappingURL=index.js.map