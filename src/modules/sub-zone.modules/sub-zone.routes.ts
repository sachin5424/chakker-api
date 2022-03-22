import express from 'express';
import ZoneSetupController from './sub-zone.controller';
import {addZoneSetupValidation,deleteZoneSetupsParamValidation,updateZoneSetupValidation} from './_validations';
import {checkValidResponse} from '../middleware/checkValidResponse'
const router:express.Router = express.Router();

const zoneSetupController = new ZoneSetupController
const Routes:any[] = [
    router.post("/admin/add/sub-zone",addZoneSetupValidation,checkValidResponse,zoneSetupController.AddZone),
    router.get("/admin/list/sub-zone",zoneSetupController.ListZoneSetup),
    router.delete("/admin/delete/sub-zone/:id",deleteZoneSetupsParamValidation,checkValidResponse,zoneSetupController.deleteZoneSetup),
    router.put("/admin/update/sub-zone/:id",updateZoneSetupValidation,checkValidResponse,zoneSetupController.UpdateZoneSetup),
];

const SubZoneRoutes = Routes;

export {
    SubZoneRoutes
}