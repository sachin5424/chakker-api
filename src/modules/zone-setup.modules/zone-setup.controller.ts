import express from 'express';
import {validationResult} from 'express-validator';
import {AddZoneInterFace,updateZoneSetUpInterFace} from './zone-setup.interface';
import {addZoneService,listZoneSetUpService,deleteZoneSetUpService,updateZoneSetUpService,updateZoneSetUpLocationsService} from './zone-setup.service';
export default class ZoneSetupController{
    constructor(){

    }
    async AddZone(req:express.Request, res: express.Response){
        try {
              const payload:AddZoneInterFace = req.body;
              let options:AddZoneInterFace ={
                  zoneName: payload.zoneName,
                  status: payload.status,
                  location: {
                    coordinates:[req.body.latitude,req.body.longitude]
                  },
                  
              }
              const data = await addZoneService(options);

    
              return res.status(200).json({message: "successfully create zone",data: data})
        } catch (error) {
            return res.status(500).json({ status: 500,error: error.message });
        }
    }

    async deleteZoneSetup(req:express.Request, res: express.Response){
        try {
          const id:string = req.params.id;
          const data = await deleteZoneSetUpService(id);
          return res.status(200).json({data:200})

        } catch (error) {
            return res.status(500).json({ status: 500,error: error.message });
        }
    }
    async ListZoneSetup(req:express.Request, res: express.Response){
        try {
            const data = await listZoneSetUpService();
            return res.status(200).json({data})
        } catch (error) {
            return res.status(500).json({error: error.message,status:500})
        }
    }
    async UpdateZoneSetup(req:express.Request, res: express.Response){
        try {
            const payload:updateZoneSetUpInterFace = req.body;
            const id:any = req.params.id;
            if(req.body.latitude){
              const update = {
                $set:{
                    location:{
                        coordinates:[req.body.latitude,req.body.longitude]
                    }
                   }
              }
              await updateZoneSetUpLocationsService(id,update)
            }
            const data:any = await updateZoneSetUpService(id,payload);
            return res.status(200).json({status:200,message:"update data successfully !",data})
        } catch (error) {
            console.log(error);
            
            return res.status(500).json({status:500,error: error.message})
        }
    }
}