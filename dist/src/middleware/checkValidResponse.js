"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidResponse = void 0;
const express_validator_1 = require("express-validator");
let checkValidResponse = (req, res, next) => {
    try {
        console.log(req.body);
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        else {
            next();
        }
    }
    catch (error) {
        return res.status(500).json({ status: 500, error: error.message });
    }
};
exports.checkValidResponse = checkValidResponse;
//# sourceMappingURL=checkValidResponse.js.map