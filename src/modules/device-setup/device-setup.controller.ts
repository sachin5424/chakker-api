import express from 'express';
import { DeviceSetupAddInterface,DeviceSetupUpdateInterface } from './device-setup.interface';
import { createDeviceSetup,DeviceSetupListService ,upDateDrivceSetup,DeviceSetupListAggregate} from './device-setup.service';
import {generateRandomString} from '../shared/_hepler';
import {PowerOfService,DeviceFindById,DeviceFindByIdAndFilter} from './device-setup-dashboard.service'
import {base64StringToImage} from 'base64string-to-image';
export default class DeviceSetUpController {
    constructor() {
    };
    async addDeviceZoneSetup(req: express.Request, res: express.Response) {
        try {
            const payload: DeviceSetupAddInterface = req.body;
            const ImageName:string = Date.now().toString()

            const deviceId =  generateRandomString("sachin",6)
            let options: DeviceSetupAddInterface = {
                zoneId: payload.zoneId,
                deviceId:deviceId,
                subZoneId: payload.subZoneId,
                simNumber: payload.simNumber,
                applicationType: payload.applicationType,
                PumpHp: payload.PumpHp,
                operatorName: payload.operatorName,
                smsNumber: payload.smsNumber,
                smsStatus: payload.smsStatus,
                installationDate: payload.installationDate,
                serviceOverDate: payload.serviceOverDate,
                deviceType: payload.deviceType,
                location: payload.location,
                imeiNumber: payload.imeiNumber,
                operatorNumber: payload.operatorNumber,
                place:payload.place,
                
            };
            if(payload.Image){
                var image_path:any = await base64StringToImage(payload.Image,"upload/",ImageName)
                options['Image'] = image_path;
            }
            if(req.body.latitude){
                 var loaction = {
                    coordinates:[req.body.latitude, req.body.longitude]
                 }
                  options['location'] =  loaction
            }
            
            const data: any = await createDeviceSetup(options);
            return res.status(200).json({ status: 200, message: "success device setup data create !", data });

        } catch (error) {
            return res.status(500).send({ status: 500, error: error.message });
        }
    }

   async ListDeviceZoneSetup(req:express.Request, res: express.Response) {
       try {
           const data = await DeviceSetupListAggregate();
           return res.status(200).json({ status: 200,data})
       } catch (error) {
           return res.status(500).json({status:500,error:error.message})
       }
   }

   async UpdateDeviceZoneSetup(req:express.Request, res: express.Response){
       try {
           const _id:string = req.params.id;
           const payload:DeviceSetupUpdateInterface = req.body;
           const data:any = await upDateDrivceSetup(_id,payload);
           return res.status(200).json({ status: 200,message:"",data})

       } catch (error) {
           return res.status(500).json({ status: 500, error: error.message})
       }
   } 

   async DeviceZonePowerOff(req:express.Request, res: express.Response){
       try {
           const _id:string = req.params.id;
           const check_power:any = req.query.power;
           const power = check_power == 'true'? true:false;
           await PowerOfService(_id,power);
           return res.status(200).json({ status: 200,message:`successfully power ${power}` });
        //    await
       } catch (error) {
           return res.status(500).json({ status: 500, error: error.message})
       }
   }

   async DeviceZoneDetails(req:express.Request, res: express.Response){
       try {
           const _id:string = req.params.id;
           const data:any[] = await DeviceFindByIdAndFilter(_id);
           return res.status(200).json({ status:200,data})
       } catch (error) {
        return res.status(500).json({ status: 500, error: error.message})
       }
   }

}

