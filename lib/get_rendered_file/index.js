"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_rx_wrapper_1 = require("@ag1/mysql_rx_wrapper");
const path = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const create_ejs_data_1 = require("../create_ejs_data");
const get_all_columns_1 = require("../get_all_columns");
const get_all_tables_1 = require("../get_all_tables");
const rx_ejs_render_file_1 = require("../rx_ejs_render_file");
const mainLayoutPath = path.join(__dirname, '../../templates/layout.ejs');
function getRenderedFile(connection) {
    const obseravable = mysql_rx_wrapper_1.connect(connection).pipe(operators_1.mergeMap(() => get_all_tables_1.getAllTables(connection)), operators_1.mergeMap(([tables]) => rxjs_1.from(tables)), operators_1.mergeMap((table) => get_all_columns_1.getAllColumns(table.TABLE_NAME, connection)), operators_1.mergeMap(([rawColumns]) => create_ejs_data_1.createEjsData(rawColumns)), operators_1.mergeMap((templateData) => rx_ejs_render_file_1.rxEjsRenderFile(mainLayoutPath, templateData)));
    return obseravable;
}
exports.getRenderedFile = getRenderedFile;
//# sourceMappingURL=index.js.map