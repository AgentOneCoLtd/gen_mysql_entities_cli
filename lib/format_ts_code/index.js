"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prettier_1 = require("prettier");
function formatTsCode(str) {
    const prettierCode = prettier_1.format(str, {
        printWidth: 120,
        tabWidth: 4,
        trailingComma: 'all',
        semi: true,
        arrowParens: 'always',
        singleQuote: true,
        parser: 'typescript',
    });
    return prettierCode;
}
exports.formatTsCode = formatTsCode;
//# sourceMappingURL=index.js.map