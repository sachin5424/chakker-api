"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
let generateRandomString = (string, length) => {
    const value = Math.random().toString(36).substr(2, length);
    if (value === string) {
        generateRandomString(string, length);
    }
    return value;
};
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=_hepler.js.map