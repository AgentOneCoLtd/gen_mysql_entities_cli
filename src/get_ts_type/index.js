"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTsType(dataType, columnType, isNullable) {
    const mainType = getMainType(dataType, columnType);
    if (isNullable === 'YES') {
        return `${mainType} | null`;
    }
    return mainType;
}
exports.getTsType = getTsType;
// NOTE: https://github.com/mysqljs/mysql#type-casting
function getMainType(dataType, columnType) {
    switch (dataType) {
        case 'tinyint':
        case 'smallint':
        case 'int':
        case 'mediumint':
        case 'year':
        case 'float':
        case 'double':
        case 'decimal':
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
            return getEnumType(columnType);
        default:
            return 'string';
    }
}
exports.getMainType = getMainType;
function getEnumType(columnType) {
    return columnType
        .substring(5, columnType.length - 1)
        .replace(/\'/gi, "'")
        .replace(/\,/gi, ' | ');
}
exports.getEnumType = getEnumType;
