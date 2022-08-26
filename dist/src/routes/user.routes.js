"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_register_validations_1 = require("../validations/user-register.validations");
const express_1 = require("express");
const checkValidResponse_1 = require("../middleware/checkValidResponse");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userController = new user_controller_1.default();
const router = (0, express_1.Router)();
router.post('/user-register', user_register_validations_1.userRegisterValidate, checkValidResponse_1.checkValidResponse, userController.userRegister);
router.post('/user-email-verify', user_register_validations_1.UserVerificationValidate, checkValidResponse_1.checkValidResponse, userController.userEmailVerification);
router.get('/admin/user-list', userController.userList);
router.get('/admin/user-details/:id', userController.userDetails);
router.put('/admin/user-update/:id', userController.userUpdate);
exports.default = router;
//# sourceMappingURL=user.routes.js.map