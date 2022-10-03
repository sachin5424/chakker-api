import {DeviceSetupAddInterface,DeviceSetupUpdateInterface} from '../interface/device-setup.interface';
import {deviceSetupModel, Drvice_Maintenance} from '../models/index';

let createDeviceSetup = (value:DeviceSetupAddInterface) => {
    return new Promise<DeviceSetupAddInterface>(async (resolve, reject) => {
     try {
         const data:any = await deviceSetupModel.create(value).catch((err:any)=>{
             reject(err);
         });
         resolve(data)
     } catch (error) {
         reject(error);
     }
    });

};

let DeviceSetupListService = () =>{
    return new Promise<DeviceSetupAddInterface[]>(async (resolve, reject) =>{
        try {
            const data:DeviceSetupAddInterface[] = await deviceSetupModel.find();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let DeviceSetupListAggregate= () =>{

        return new Promise((resolve,reject)=>{
            deviceSetupModel.aggregate(
                [
                  {
                    $lookup:{
                        from:"zone_setups",
                        foreignField:"_id",
                        localField:"zoneId",
                        as:"Zone"
                    }
                  },
                  {$unwind:"$Zone"},

                  {
                    $lookup:{
                        from:"sub_zones",
                        foreignField:"_id",
                        localField:"subZoneId",
                        as:"sub_zones"
                    }
                  },
                  {$unwind:"$sub_zones"},
                  {
                      $addFields:{
                          "addBy":"Sachin sagar",
                          "zoneSetupName":"$Zone.zoneName",
                          "subZoneName":"$sub_zones.zoneName",
                      }
                  },
                  {
                      $project:{
                          "Zone":0,
                          "sub_zones":0,
                          "location":0

                      }
                  }

                ]
            ).exec((err,invites)=>{
            if(err){
                reject(err)
            }
            resolve(invites)
        })
        })
}

let upDateDrivceSetup = (id:String,value:DeviceSetupUpdateInterface) =>{
   return new Promise<DeviceSetupUpdateInterface>(async (resolve, reject)=>{
       try {
        console.log(value)
           const data:any = await deviceSetupModel.updateOne({_id:id},value);
           resolve(data)
       } catch (error) {
           reject(error)
       }
   })
}

let drivceSetupUpdate =async (id:String,value:any) =>{
   try {
      return  await deviceSetupModel.updateOne({_id:id},value);
   } catch (error) {
      throw error
   }
 }

 let DrviceMaintenance = async (payload:any)=>{
    try {
        let check = await Drvice_Maintenance.findOne({deviceId:payload.deviceId})
        if(check){
           return await Drvice_Maintenance.updateOne({deviceId:payload.deviceId},payload);
        }
        return await Drvice_Maintenance.create(payload);
    

    } catch (error) {
        throw error
    }
 }
 
export {createDeviceSetup,DeviceSetupListService,upDateDrivceSetup,DeviceSetupListAggregate,DrviceMaintenance,drivceSetupUpdate}