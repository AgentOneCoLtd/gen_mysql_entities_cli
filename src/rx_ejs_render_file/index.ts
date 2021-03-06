import { isNil } from '@ag1/nil';
import { Data, renderFile } from 'ejs';
import { Observable, Observer } from 'rxjs';

function observerRenderFile(path: string, data: Data, observer: Observer<[string, Data]>): void {
    renderFile(path, data, (error, htmlStr) => {
        if (!isNil(error)) {
            observer.error(error);

            return;
        }

        if (isNil(htmlStr)) {
            observer.error(new Error('NO_OUTPUT'));

            return;
        }

        observer.next([htmlStr, data]);
        observer.complete();
    });
}

export function rxEjsRenderFile(path: string, data: Data): Observable<[string, Data]> {
    type tupleStrData = [string, Data];

    return Observable.create((observer: Observer<tupleStrData>) => {
        observerRenderFile(path, data, observer);
    }) as Observable<tupleStrData>;
}
