"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_rx_wrapper_1 = require("@ag1/mysql_rx_wrapper");
const mysql_1 = require("mysql");
function getSql(tableName) {
    return `
    SELECT TABLE_NAME,COLUMN_NAME,COLUMN_DEFAULT,IS_NULLABLE,
    DATA_TYPE,CHARACTER_MAXIMUM_LENGTH,NUMERIC_PRECISION,NUMERIC_SCALE,
    CASE WHEN EXTRA like '%auto_increment%' THEN 1 ELSE 0 END IsIdentity, column_type, column_key
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA like DATABASE()
    AND
    TABLE_NAME = ${mysql_1.escape(tableName)}
    ;`;
}
exports.getSql = getSql;
function getAllColumns(tableName, connection) {
    const sql = getSql(tableName);
    return mysql_rx_wrapper_1.query({ sql, connection });
}
exports.getAllColumns = getAllColumns;
