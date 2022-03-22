


interface DeviceSetupAddInterface {
    _id?:string,    
   deviceId?: String,
   location?:any,
   zoneId:String,
   subZoneId?:String,
   imeiNumber:Number,
   simNumber:String,
   PumpHp:String,
   applicationType:String,
   deviceType:String,
   operatorName:String,
   operatorNumber:Number,
   installationDate:Date,
   serviceOverDate:Date,
   smsNumber:String,
   smsStatus:String,
   place?:String,
   Image?:string,

   
}

interface DeviceSetupUpdateInterface {
    _id?:string,    
    deviceId?: String,
    location?:Location,
    zoneId?:String,
    subZoneId?:String,
    imeiNumber?:Number,
    simNumber?:String,
    PumpHp?:String,
    applicationType?:String,
    deviceType?:String,
    operatorName?:String,
    operatorNumber?:Number,
    installationDate?:Date,
    serviceOverDate?:Date,
    smsNumber?:String,
    smsStatus?:String,
    place?:string,
    Image?:string,
    
 }

 export {
    DeviceSetupUpdateInterface,
    DeviceSetupAddInterface
 }