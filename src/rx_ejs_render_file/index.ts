import { isNil } from '@ag1/nil';
import { Data, renderFile } from 'ejs';
import { Observable, Observer } from 'rxjs';

function observerRenderFile(path: string, data: Data, observer: Observer<[string, Data]>) {
    renderFile(path, data, (error, htmlStr) => {
        if (!isNil(error) || isNil(htmlStr)) {
            observer.error(error || new Error('NO_OUTPUT'));

            return;
        }

        observer.next([htmlStr, data]);
        observer.complete();
    });
}

export function rxEjsRenderFile(path: string, data: Data) {
    return Observable.create((observer: Observer<[string, Data]>) => {
        observerRenderFile(path, data, observer);
    }) as Observable<[string, Data]>;
}
