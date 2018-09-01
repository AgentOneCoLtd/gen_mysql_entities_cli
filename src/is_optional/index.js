"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nil_1 = require("@ag1/nil");
function isOptional(isNullable, columnDefault) {
    if (isNullable === 'YES') {
        return true;
    }
    const isNullableRequired = columnDefault === '' || nil_1.isNil(columnDefault);
    return !isNullableRequired;
}
exports.isOptional = isOptional;
