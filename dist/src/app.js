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
const express_1 = __importDefault(require("express"));
const index_1 = require("./db/index");
const app_routes_1 = __importDefault(require("./modules/app.routes"));
const mongoose_autogenrate_client_permissions_1 = require("mongoose-autogenrate-client-permissions");
// console.log(routes);
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
express_1.default.json();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3001;
        this.intializeMiddleware();
        (0, index_1.connection)();
        (0, mongoose_autogenrate_client_permissions_1.autogenratePermission)();
        // autogenratePermission.autogenratePermission()
    }
    intializeMiddleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use("/api", app_routes_1.default);
        this.app.post("/test", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const data = yield (0, mongoose_autogenrate_client_permissions_1.addClientPermission)(payload.userId, payload.permissionId);
                return res.status(200).json({ data });
            }
            catch (error) {
                return res.status(500).json({ error: error.message });
            }
        }));
        this.app.get("/test", this.test, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({ status: 200, message: "done" });
            }
            catch (error) {
                return res.status(500).json({ error: error.message });
            }
        }));
    }
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.checkPermission("users", "users", "_id", "62247a9aa2bdf04a5b842cbd", "GET");
                return res.status(200).json({ data });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    checkPermission(clientModelName, checkModelName, clentForeignField, clientId, method) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoose_1.default.connection.db.collection('user_auth_permissions').aggregate([
                    {
                        $lookup: {
                            from: 'permissions',
                            localField: 'permissionId',
                            foreignField: '_id',
                            as: 'permissions',
                        },
                    },
                    {
                        $lookup: {
                            from: clientModelName,
                            localField: 'userId',
                            foreignField: clentForeignField,
                            as: 'user'
                        }
                    },
                    { $match: { userId: new mongoose_1.default.Types.ObjectId(clientId), permissions: { $elemMatch: { model_name: checkModelName, method: method } } } },
                ]).toArray().then(data => {
                    mongoose_1.default.connection.db.collection(clientModelName).findOne({ _id: new mongoose_1.default.Types.ObjectId(clientId) }).then(result => {
                        if (data.length == 0) {
                            reject(false);
                            // return res.status(403).json({ message: "not permission this route" })
                        }
                        else {
                            resolve(true);
                            // next()
                        }
                    });
                });
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port : ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map