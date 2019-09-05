#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const makedir = require("make-dir");
const mysql_1 = require("mysql");
const path = require("path");
const get_info_from_cli_1 = require("./get_info_from_cli");
const get_rendered_file_1 = require("./get_rendered_file");
const answer = get_info_from_cli_1.getInfoFromCli();
const { outputDir: rawOutputDir, host, port: portStr, user, password, database } = answer;
const connection = mysql_1.createConnection({
    host,
    port: parseInt(portStr, 10),
    user: user,
    password: password,
    database: database,
});
const outputDir = path.resolve(process.cwd(), rawOutputDir);
makedir.sync(outputDir);
get_rendered_file_1.getRenderedFile(connection).subscribe({
    next([htmlStr, templateData]) {
        fs_1.writeFileSync(`${outputDir}/${templateData.tableName}.ts`, htmlStr);
    },
    error(error) {
        connection.end();
        console.error(error);
        process.exit(1);
    },
    complete() {
        const now = new Date();
        const content = `generated at ${now.toLocaleString()} ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
        fs_1.writeFileSync(`${outputDir}/meta`, content);
        connection.end();
        process.exit(0);
    },
});
//# sourceMappingURL=index.js.map