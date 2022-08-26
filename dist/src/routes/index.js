"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// all routes 
const auth_routes_1 = __importDefault(require("./auth.routes"));
const zone_setup_routes_1 = require("./zone-setup.routes");
const sub_zone_routes_1 = require("./sub-zone.routes");
const device_setup_routes_1 = require("./device-setup.routes");
const user_routes_1 = __importDefault(require("./user.routes"));
const permission_routes_1 = __importDefault(require("./permission.routes"));
const routes = [
    auth_routes_1.default,
    zone_setup_routes_1.ZoneSetUpRoutes,
    sub_zone_routes_1.SubZoneRoutes,
    device_setup_routes_1.DeviceSetUpRoutes,
    user_routes_1.default,
    permission_routes_1.default
];
exports.default = routes;
//# sourceMappingURL=index.js.map