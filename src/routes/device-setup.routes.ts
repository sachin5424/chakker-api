import DeviceSetUpController from '../controllers/device-setup.controller';
import {deviceSetpValidation,upDateDeviceSetpValidation,powerDeviceSetpValidation} from '../validations/device-setup-dashboard-validations';
import {checkValidResponse} from '../middleware/checkValidResponse'
import express,{Router} from 'express';

const deviceSetUpController = new DeviceSetUpController
const router:Router =  Router();


const Routers:any[] =[
    router.post("/admin/add/device-setup",deviceSetpValidation,checkValidResponse,deviceSetUpController.addDeviceZoneSetup),
    router.get("/admin/list/device-setup",deviceSetUpController.ListDeviceZoneSetup),
    router.put("/admin/update/device-setup/:id",upDateDeviceSetpValidation,checkValidResponse,deviceSetUpController.UpdateDeviceZoneSetup),
    router.get("/admin/power/device-setup/:id",powerDeviceSetpValidation,checkValidResponse,deviceSetUpController.DeviceZonePowerOff),
    router.get("/admin/device-setup/details/:id",deviceSetUpController.DeviceZoneDetails)

];

const DeviceSetUpRoutes = Routers;


export {
    DeviceSetUpRoutes
}



