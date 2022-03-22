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
const sub_zone_service_1 = require("./sub-zone.service");
class ZoneSetupController {
    constructor() {
    }
    AddZone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                let options = {
                    zoneName: payload.zoneName,
                    status: payload.status,
                    location: {
                        coordinates: [req.body.latitude, req.body.longitude]
                    }
                };
                const data = yield (0, sub_zone_service_1.addZoneService)(options);
                return res.status(200).json({ message: "successfully create zone", data: data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    deleteZoneSetup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = yield (0, sub_zone_service_1.deleteZoneSetUpService)(id);
                return res.status(200).json({ data: 200 });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    ListZoneSetup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, sub_zone_service_1.listZoneSetUpService)();
                return res.status(200).json({ data });
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
    UpdateZoneSetup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const id = req.params.id;
                if (req.body.latitude) {
                    const update = {
                        $set: {
                            location: {
                                coordinates: [req.body.latitude, req.body.longitude]
                            }
                        }
                    };
                    yield (0, sub_zone_service_1.updateZoneSetUpLocationsService)(id, update);
                }
                const data = yield (0, sub_zone_service_1.updateZoneSetUpService)(id, payload);
                return res.status(200).json({ status: 200, message: "update data successfully !", data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
}
exports.default = ZoneSetupController;
//# sourceMappingURL=sub-zone.controller.js.map