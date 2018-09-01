"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_rx_wrapper_1 = require("@ag1/mysql_rx_wrapper");
const sql = `
SELECT TABLE_NAME
FROM information_schema.tables
WHERE table_type='BASE TABLE'
AND table_schema like DATABASE()
;`;
function getAllTables(connection) {
    return mysql_rx_wrapper_1.query({ sql, connection });
}
exports.getAllTables = getAllTables;
