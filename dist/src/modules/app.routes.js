"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// all routes 
const auth_modules_1 = __importDefault(require("./auth.modules/auth.modules"));
const zone_setup_router_1 = require("./zone-setup.modules/zone-setup.router");
const sub_zone_routes_1 = require("./sub-zone.modules/sub-zone.routes");
const device_setup_router_1 = require("./device-setup/device-setup.router");
const routes = [
    auth_modules_1.default,
    zone_setup_router_1.ZoneSetUpRoutes,
    sub_zone_routes_1.SubZoneRoutes,
    device_setup_router_1.DeviceSetUpRoutes
];
exports.default = routes;
//# sourceMappingURL=app.routes.js.map