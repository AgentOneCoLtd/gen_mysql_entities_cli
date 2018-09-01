export function getTsType(dataType: string, columnType: string, isNullable: string) {
    const mainType = getMainType(dataType, columnType);

    if (isNullable === 'YES') {
        return `${mainType} | null`;
    }

    return mainType;
}

// NOTE: https://github.com/mysqljs/mysql#type-casting
export function getMainType(dataType: string, columnType: string) {
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

export function getEnumType(columnType: string) {
    return columnType
        .substring(5, columnType.length - 1)
        .replace(/\'/gi, "'")
        .replace(/\,/gi, ' | ');
}
