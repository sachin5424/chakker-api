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
const user_permission_service_1 = require("../services/user-permission.service");
class UserPermissionController {
    constructor() {
    }
    ;
    createUserPermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                for (let index = 0; index < payload.permissions.length; index++) {
                    let options = {
                        userId: payload.userId,
                        permissionId: payload.permissions[index]
                    };
                    yield (0, user_permission_service_1.AddPermissionService)(options);
                }
                return res.status(200).json({ status: 200, message: "create user permission successfully" });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    ListUserPermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, user_permission_service_1.getPermissionService)();
                return res.status(200).json({ data });
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
    AddUserPermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
    checkModulesPermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getRequest = req;
                const payload = req.body;
                console.log(getRequest.userId, "user get");
                const data = yield (0, user_permission_service_1.chekcUserPermissions)(payload, getRequest.userId);
                console.log(data, "data");
                // const data:any = await checkPermission('users', getRequest.userId)
                return res.status(200).json({ status: 200, data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    getAllPermissions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getRequest = req;
                console.log(getRequest.userId);
                const data = yield (0, user_permission_service_1.allPermissionsService)(getRequest.userId);
                return res.status(200).json({
                    status: 200, data
                });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    checkUsersPermissions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                const data = yield (0, user_permission_service_1.checkUsersPermissionsService)(userId);
                return res.json({ data });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    status: 500,
                    message: error.message
                });
            }
        });
    }
}
exports.default = UserPermissionController;
//# sourceMappingURL=user-permission.controller.js.map