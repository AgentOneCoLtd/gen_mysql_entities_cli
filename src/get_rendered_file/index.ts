import { connect } from '@ag1/mysql_rx_wrapper';
import { Connection } from 'mysql';
import path from 'path';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { createEjsData } from '../create_ejs_data';
import { getAllColumns } from '../get_all_columns';
import { getAllTables } from '../get_all_tables';
import { rxEjsRenderFile } from '../rx_ejs_render_file';

const mainLayoutPath = path.join(__dirname, '../../templates/layout.ejs');

export function getRenderedFile(connection: Connection) {
    const obseravable = connect(connection).pipe(
        mergeMap(() => getAllTables(connection)),
        mergeMap(([tables]) => from(tables)),
        mergeMap((table) => getAllColumns(table.TABLE_NAME, connection)),
        mergeMap(([rawColumns]) => createEjsData(rawColumns)),
        mergeMap((templateData) => rxEjsRenderFile(mainLayoutPath, templateData)),
    );

    return obseravable;
}
