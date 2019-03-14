"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prettier_1 = require("prettier");
function formatTsCode(str) {
    return prettier_1.format(str, {
        printWidth: 120,
        tabWidth: 4,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        parser: 'typescript',
    });
}
exports.formatTsCode = formatTsCode;
//# sourceMappingURL=index.js.map