"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nil_1 = require("@ag1/nil");
function isOptional(param) {
    const { isNullable, columnDefault, isIdentity } = param;
    if (isNullable === 'YES' || isIdentity === 1) {
        return true;
    }
    const isNullableRequired = columnDefault === '' || nil_1.isNil(columnDefault);
    return !isNullableRequired;
}
exports.isOptional = isOptional;
