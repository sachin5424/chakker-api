"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceSetupModel = exports.subZoneModel = exports.zoneSetupModel = exports.userModel = exports.connection = void 0;
const connectDb_1 = require("./connectDb");
Object.defineProperty(exports, "connection", { enumerable: true, get: function () { return connectDb_1.connection; } });
const user_1 = __importDefault(require("./models/user"));
exports.userModel = user_1.default;
const zone_setup_1 = __importDefault(require("./models/zone-setup"));
exports.zoneSetupModel = zone_setup_1.default;
const sub_zone_1 = __importDefault(require("./models/sub-zone"));
exports.subZoneModel = sub_zone_1.default;
const device_setup_1 = __importDefault(require("./models/device-setup"));
exports.deviceSetupModel = device_setup_1.default;
//# sourceMappingURL=index.js.map