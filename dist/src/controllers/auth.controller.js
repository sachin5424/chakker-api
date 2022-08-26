"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const auth_service_1 = require("../services/auth.service");
class AuthController {
    constructor() {
    }
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({ errors: errors.array() });
                }
                else {
                    const payload = req.body;
                    let options = {
                        usernames: payload.username,
                        email: payload.email,
                        password: payload.password,
                        firstName: payload.firstName,
                        lastName: payload.lastName
                    };
                    console.log(options);
                    yield (0, auth_service_1.userRegister)(options);
                    //  await this._AuthService.userRegister(options)
                    return res.status(200).json({ payload });
                }
            }
            catch (error) {
                const errorrResponse = {
                    status: 500,
                    message: error.message
                };
                res.json({
                    error: errorrResponse
                });
            }
        });
    }
    AdminLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //     const errors:any = validationResult(req);
                //     if(!errors.isEmpty()){
                //         return res.status(422).json({errors: errors.array()})
                //     }
                //    else{
                const payload = req.body;
                const data = yield (0, auth_service_1.findDataByEmail)(payload.email);
                const token = yield (0, auth_service_1.genrateJwttoken)(data);
                return res.status(200).json({ data: token });
                //    }
            }
            catch (error) {
                return res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map