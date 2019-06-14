#!/usr/bin/env node

import { writeFileSync } from 'fs';
import mkdirp from 'mkdirp';
import { Connection, createConnection } from 'mysql';
import path from 'path';
import { getInfoFromCli } from './get_info_from_cli';
import { getRenderedFile } from './get_rendered_file';

const answer = getInfoFromCli();
const { outputDir: rawOutputDir, host, port: portStr, user, password, database } = answer;

const connection: Connection = createConnection({
    host,
    port: parseInt(portStr, 10),
    user: user,
    password: password,
    database: database,
});
const outputDir = path.resolve(process.cwd(), rawOutputDir);

mkdirp.sync(outputDir);

getRenderedFile(connection).subscribe({
    next([htmlStr, templateData]) {
        writeFileSync(`${outputDir}/${templateData.tableName}.ts`, htmlStr);
    },
    error(error) {
        connection.end();
        console.error(error);
        process.exit(1);
    },
    complete() {
        const now = new Date();
        const content = `generated at ${now.toLocaleString()} ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;

        writeFileSync(`${outputDir}/meta`, content);

        connection.end();
        process.exit(0);
    },
});
