import { connect } from '@ag1/mysql_rx_wrapper';
import { Connection } from 'mysql';
import * as path from 'path';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { createEjsData } from '../create_ejs_data';
import { getAllColumns } from '../get_all_columns';
import { getAllTables } from '../get_all_tables';
import { rxEjsRenderFile } from '../rx_ejs_render_file';
import { Data } from 'ejs';

const mainLayoutPath = path.join(__dirname, '../../templates/layout.ejs');

export function getRenderedFile(connection: Connection): Observable<[string, Data]> {
    const obseravable = connect(connection).pipe(
        mergeMap(() => getAllTables(connection)),
        mergeMap(([tables]) => from(tables)),
        mergeMap((table) => getAllColumns(table.TABLE_NAME, connection)),
        mergeMap(([rawColumns]) => createEjsData(rawColumns)),
        mergeMap((templateData) => rxEjsRenderFile(mainLayoutPath, templateData)),
    );

    return obseravable;
}
