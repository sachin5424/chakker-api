"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/my_database';
let connection = () => {
    var mongoUrl = "mongodb+srv://sachin:URnb17mqFrVFqnT2@cluster0.fsuun.mongodb.net/IOTPROJET?retryWrites=true&w=majority";
    var localMOngo = "mongodb://root:admim@13.233.18.144:27017/test";
    var t = "mongodb://13.233.18.144/:27017/hhh";
    mongoose_1.default.connect(mongoUrl);
    mongoose_1.default.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ");
    });
    mongoose_1.default.connection.on('error', function (err) {
        //console.log("Mongoose default connection has occured " + err + " error"));
    });
    mongoose_1.default.connection.on('disconnected', function () {
        //console.log("Mongoose default connection is disconnected"));
    });
};
exports.connection = connection;
//# sourceMappingURL=connectDb.js.map