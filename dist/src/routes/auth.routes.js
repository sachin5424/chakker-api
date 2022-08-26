"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const register_1 = require("../validations/register");
const checkValidResponse_1 = require("../middleware/checkValidResponse");
const routers = express_1.default.Router();
const authController = new auth_controller_1.default;
const Router = [
    routers.post("/auth", register_1.RegisterValidator, checkValidResponse_1.checkValidResponse, authController.test),
    routers.post("/private/admin/login", register_1.adminLoginValidation, checkValidResponse_1.checkValidResponse, authController.AdminLogin)
];
const AuthRouters = routers;
exports.default = AuthRouters;
//# sourceMappingURL=auth.routes.js.map