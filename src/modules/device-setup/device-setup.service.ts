import {DeviceSetupAddInterface,DeviceSetupUpdateInterface} from './device-setup.interface';
import {deviceSetupModel} from '../../db/index';

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
           const data:any = await deviceSetupModel.findOneAndUpdate({_id:id},value);
           resolve(data)
       } catch (error) {
           reject(error)
       }
   })
}
 
export {createDeviceSetup,DeviceSetupListService,upDateDrivceSetup,DeviceSetupListAggregate}