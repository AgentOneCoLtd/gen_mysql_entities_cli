"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nil_1 = require("@ag1/nil");
const ejs_1 = require("ejs");
const rxjs_1 = require("rxjs");
function observerRenderFile(path, data, observer) {
    ejs_1.renderFile(path, data, (error, htmlStr) => {
        if (!nil_1.isNil(error)) {
            observer.error(error);
            return;
        }
        if (nil_1.isNil(htmlStr)) {
            observer.error(new Error('NO_OUTPUT'));
            return;
        }
        observer.next([htmlStr, data]);
        observer.complete();
    });
}
function rxEjsRenderFile(path, data) {
    return rxjs_1.Observable.create((observer) => {
        observerRenderFile(path, data, observer);
    });
}
exports.rxEjsRenderFile = rxEjsRenderFile;
//# sourceMappingURL=index.js.map