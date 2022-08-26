"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubZoneRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sub_zone_controller_1 = __importDefault(require("../controllers/sub-zone.controller"));
const sub_zone_validations_1 = require("../validations/sub-zone-validations");
const checkValidResponse_1 = require("../middleware/checkValidResponse");
const router = express_1.default.Router();
const zoneSetupController = new sub_zone_controller_1.default;
const Routes = [
    router.post("/admin/add/sub-zone", sub_zone_validations_1.addZoneSetupValidation, checkValidResponse_1.checkValidResponse, zoneSetupController.AddZone),
    router.get("/admin/list/sub-zone", zoneSetupController.ListZoneSetup),
    router.delete("/admin/delete/sub-zone/:id", sub_zone_validations_1.deleteZoneSetupsParamValidation, checkValidResponse_1.checkValidResponse, zoneSetupController.deleteZoneSetup),
    router.put("/admin/update/sub-zone/:id", sub_zone_validations_1.updateZoneSetupValidation, checkValidResponse_1.checkValidResponse, zoneSetupController.UpdateZoneSetup),
];
const SubZoneRoutes = Routes;
exports.SubZoneRoutes = SubZoneRoutes;
//# sourceMappingURL=sub-zone.routes.js.map