"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getEnumOrSetType(dataType, columnType) {
    return columnType
        .substring(dataType.length + 1, columnType.length - 1)
        .replace(/\'/gi, "'")
        .replace(/\,/gi, ' | ');
}
exports.getEnumOrSetType = getEnumOrSetType;
// NOTE: https://github.com/mysqljs/mysql#type-casting
// UPDATED: 14-June-2019
function getMainType(dataType, columnType) {
    switch (dataType) {
        case 'tinyint':
        case 'smallint':
        case 'int':
        case 'mediumint':
        case 'year':
        case 'float':
        case 'double':
        case 'decimal': // document is incorrect
        case 'bigint': // document is incorrect
            return 'number';
        case 'timestamp':
        case 'date':
        case 'datetime':
            return 'Date';
        case 'tinyblob':
        case 'mediumblob':
        case 'longblob':
        case 'blob':
        case 'binary':
        case 'varbinary':
        case 'bit':
            return 'Buffer';
        case 'enum':
        case 'set':
            return getEnumOrSetType(dataType, columnType);
        default:
            return 'string';
    }
}
exports.getMainType = getMainType;
function getTsType(dataType, columnType, isNullable) {
    const mainType = getMainType(dataType, columnType);
    if (isNullable === 'YES') {
        return `${mainType} | null`;
    }
    return mainType;
}
exports.getTsType = getTsType;
//# sourceMappingURL=index.js.map