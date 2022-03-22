"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneSetUpRoutes = void 0;
const express_1 = __importDefault(require("express"));
const zone_setup_controller_1 = __importDefault(require("./zone-setup.controller"));
const _validations_1 = require("./_validations");
const checkValidResponse_1 = require("../middleware/checkValidResponse");
const router = express_1.default.Router();
const zoneSetupController = new zone_setup_controller_1.default;
const Routes = [
    router.post("/admin/add/zone-setup", _validations_1.addZoneSetupValidation, checkValidResponse_1.checkValidResponse, zoneSetupController.AddZone),
    router.get("/admin/list/zone-setup", zoneSetupController.ListZoneSetup),
    router.delete("/admin/delete/zone-setup/:id", _validations_1.deleteZoneSetupsParamValidation, checkValidResponse_1.checkValidResponse, zoneSetupController.deleteZoneSetup),
    router.put("/admin/update/zone-setup/:id", _validations_1.updateZoneSetupValidation, checkValidResponse_1.checkValidResponse, zoneSetupController.UpdateZoneSetup),
];
const ZoneSetUpRoutes = Routes;
exports.ZoneSetUpRoutes = ZoneSetUpRoutes;
//# sourceMappingURL=zone-setup.router.js.map