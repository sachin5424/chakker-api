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
const index_1 = require("./models/index");
const routes_1 = __importDefault(require("./routes"));
// console.log(routes);
const mongoose_1 = __importDefault(require("mongoose"));
const admin_verify_jwt_1 = require("./middleware/admin-verify-jwt");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
express_1.default.json();
const imageStorage = multer_1.default.diskStorage({
    // Destination to store image     
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
            + path_1.default.extname(file.originalname));
        // file.fieldname is name of the field (image)
        // path.extname get the uploaded file extension
    }
});
const imageUpload = (0, multer_1.default)({
    storage: imageStorage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'));
        }
        cb(undefined, true);
    }
});
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3001;
        this.intializeMiddleware();
        // permissionsModel.find().then(data => {
        //   console.log(data);
        // })
        // console.log( permissionsModel.find());
        // autogenratePermission()
        // autogenratePermission.autogenratePermission()
    }
    intializeMiddleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use("/api/admin", admin_verify_jwt_1.ADMINJWTVERIFY);
        this.app.use("/api", routes_1.default);
        this.app.use(express_1.default.static('./iotproject'));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../upload/')));
        this.app.get('*', function (request, response) {
            response.sendFile(path_1.default.join(__dirname, '/iotproject/index.html'));
        });
        this.app.post('/uploadImage', imageUpload.single('image'), (req, res) => {
            try {
                return res.json({ success: 200, url: `http://13.234.48.21:3001/${req.file.filename}` }); //http://13.234.48.21:3001/
            }
            catch (error) {
                return res.status(400).send({ error: error.message });
            }
        });
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
            (0, index_1.connection)();
            console.log(`App listening on the port : ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map