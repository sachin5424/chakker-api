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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUsersPermissionsService = exports.chekcUserPermissions = exports.allPermissionsService = exports.checkPermission = exports.AddPermissionService = exports.getPermissionService = void 0;
// import userModelPermissionModel from '../models/models/user-permission';
// import permissionModel from '../models/models/permissions';
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_autogenrate_client_permissions_1 = require("mongoose-autogenrate-client-permissions");
const shared_service_1 = require("./shared.service");
// const UserFindOne = (value:Object) =>{
//     return new Promise(async(resolve,reject) =>{
//       try {
//           const data:any = await userModel.findOne(value);
//           resolve(data)
//       } catch (error) {
//           reject(error);
//       }
//     })
// }
const AddPermissionService = (value) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield mongoose_autogenrate_client_permissions_1.userModelPermissionModel.create(value);
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.AddPermissionService = AddPermissionService;
const getPermissionService = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield mongoose_autogenrate_client_permissions_1.permissionsModel.find();
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.getPermissionService = getPermissionService;
const checkPermission = (moduleName, userId) => {
    console.log("ok", moduleName, userId);
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, shared_service_1.aggregate)(mongoose_autogenrate_client_permissions_1.userModelPermissionModel, [
            {
                $match: {
                    userId: new mongoose_1.default.Types.ObjectId(userId),
                }
            },
            {
                $lookup: {
                    from: 'permissions',
                    localField: 'permissionId',
                    foreignField: '_id',
                    as: "permissions"
                }
            },
            {
                $group: {
                    _id: {
                        "module": "$permissions.model_name"
                    }
                }
            },
            //  {
            //      $match: {
            //          '_id.module':{
            //              $in:[moduleName]
            //          }
            //      }
            //  },
            {
                $project: {
                    'module': '$_id.module'
                }
            },
            {
                $project: {
                    _id: 0
                }
            }
        ]);
        resolve(data);
    }));
};
exports.checkPermission = checkPermission;
const chekcUserPermissions = (value, userId) => {
    console.log(value, "ok", userId);
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, shared_service_1.aggregate)(mongoose_autogenrate_client_permissions_1.userModelPermissionModel, [
            {
                $match: {
                    userId: new mongoose_1.default.Types.ObjectId(userId),
                }
            },
            {
                $addFields: {
                    check_fields: value
                }
            },
            {
                $addFields: {
                    check_fields_method: '$check_fields.method'
                }
            },
            {
                $lookup: {
                    from: 'permissions',
                    localField: 'permissionId',
                    foreignField: '_id',
                    as: 'permissions',
                }
            },
            // {
            //     $match:{
            //         "test.model_name":"users"
            //     }
            // }
            // {
            //     $lookup: {
            //         from:'permissions',
            //         let: {method:'$check_fields_method'},
            //         // localField: 'permissionId',
            //         // foreignField:'_id',
            //         as:"permissions",
            //         pipeline:[
            //             {
            //                 $match: {$expr: {$in: ['$method', '$$method']}}
            //            },
            //         ]
            //     }
            // },
            // {
            //     $match: {
            //         "$permissions.model_name":"users"
            //  },
            // }
            // {
            //     $project: {
            //         permissions:1,
            //         permissions1: {
            //             $filter: {
            //                 input: "$check_fields",
            //                 as: "reply",
            //                 cond: {
            //                     $in: ["$$reply.method", "$permissions.method"],
            //                 },
            //             },
            //         },
            //     },
            // },
            {
                $project: { permissions: 1 }
            }
        ]);
        console.log(data[0], ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        resolve(data);
    }));
};
exports.chekcUserPermissions = chekcUserPermissions;
// Test('623d6e7ccc2f979ac2cb06f3').then((data) => {
//     console.log(data[3],"?");
// })
const allPermissionsService = (userId) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filter = [
                {
                    $match: {
                        userId: new mongoose_1.default.Types.ObjectId(userId),
                    }
                }
            ];
            const data = yield (0, shared_service_1.aggregate)(mongoose_autogenrate_client_permissions_1.userModelPermissionModel, filter);
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.allPermissionsService = allPermissionsService;
const checkUsersPermissionsService = (userId) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            var filter = [
                {
                    $match: {
                        userId: new mongoose_1.default.Types.ObjectId(userId)
                    }
                },
            ];
            var data = yield (0, shared_service_1.aggregate)(mongoose_autogenrate_client_permissions_1.userModelPermissionModel, filter);
            console.log(data);
            var permissionsId = [];
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].permissionId);
                permissionsId.push(data[i].permissionId);
                // permissionsId = [...data[i].permissionId]
            }
            data = yield mongoose_autogenrate_client_permissions_1.permissionsModel.find({ _id: permissionsId });
            // filter =[
            //     {
            //         $match:{
            //             _id:new mongoose.Types.ObjectId(permissionsId)
            //         }
            //     }
            // ];
            // var data:any = await aggregate(userModelPermissionModel,filter);
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.checkUsersPermissionsService = checkUsersPermissionsService;
//# sourceMappingURL=user-permission.service.js.map