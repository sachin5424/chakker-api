"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_permission_controller_1 = __importDefault(require("../controllers/user-permission.controller"));
const user_permission_validations_1 = require("../validations/user-permission.validations");
const checkValidResponse_1 = require("../middleware/checkValidResponse");
const userPermissionController = new user_permission_controller_1.default();
const router = (0, express_1.Router)();
router.post('/admin/user/create/permission', user_permission_validations_1.createUserPermissionValidation, checkValidResponse_1.checkValidResponse, userPermissionController.createUserPermission);
router.get('/admin/user/get/permission', userPermissionController.ListUserPermission);
router.post('/admin/user/check/permission', userPermissionController.checkModulesPermission);
router.get('/admin/user/all/permission', userPermissionController.getAllPermissions);
router.get("/admin/check/users/permission/:userId", userPermissionController.checkUsersPermissions);
exports.default = router;
//# sourceMappingURL=permission.routes.js.map