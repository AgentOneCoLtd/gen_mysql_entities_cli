import { Data } from 'ejs';
import { Observable } from 'rxjs';
export declare function rxEjsRenderFile(path: string, data: Data): Observable<[string, Data]>;
