import express from 'express';
import ZoneSetupController from '../controllers/zone-setup.controller';
import {addZoneSetupValidation,deleteZoneSetupsParamValidation,updateZoneSetupValidation} from '../validations/zone-setup-validations';
import {checkValidResponse} from '../middleware/checkValidResponse'
const router:express.Router = express.Router();

const zoneSetupController = new ZoneSetupController
const Routes:any[] = [
    router.post("/admin/add/zone-setup",addZoneSetupValidation,checkValidResponse,zoneSetupController.AddZone),
    router.get("/admin/list/zone-setup",zoneSetupController.ListZoneSetup),
    router.delete("/admin/delete/zone-setup/:id",deleteZoneSetupsParamValidation,checkValidResponse,zoneSetupController.deleteZoneSetup),
    router.put("/admin/update/zone-setup/:id",updateZoneSetupValidation,checkValidResponse,zoneSetupController.UpdateZoneSetup),
];

const ZoneSetUpRoutes = Routes;

export {
    ZoneSetUpRoutes
}