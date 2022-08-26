"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregate = void 0;
let aggregate = (model, filter) => {
    return new Promise((resolve, reject) => {
        model.aggregate(filter).exec((err, invites) => {
            if (err) {
                reject(err);
            }
            resolve(invites);
        });
    });
};
exports.aggregate = aggregate;
//# sourceMappingURL=shared.service.js.map