import {zoneSetupModel} from '../../db/index';
import {AddZoneInterFace,updateZoneSetUpInterFace} from './zone-setup.interface'



let checkUniqueZoneNameValidation = (zoneName: string) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const data = await zoneSetupModel.findOne({ zoneName: zoneName}).catch((err:any) => {
                reject(err);
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}

let checkByIdUniqueZoneNameValidation = (id:any,zoneName: string) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const data = await zoneSetupModel.findOne({_id:{$ne:id}, zoneName: zoneName}).catch((err:any) => {
                reject(err);
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}

let addZoneService =async (setUpZone:AddZoneInterFace)=>{
  return new Promise(async (resolve, reject) => {
    try {
        const data = await zoneSetupModel.create(setUpZone).catch((err:any) => {
            reject(err)
        });
        resolve(data)
    } catch (error) {
        reject(error);
    }
  })
}


let findOneZone = (id:any) => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await zoneSetupModel.findOne({_id:id}).catch((error:any)=>{
                reject(error);
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}

let zoneSetupFindById = (id:any) => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await zoneSetupModel.findOne({_id:id}).catch((error:any)=>{
                reject(error);
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}
let deleteZoneSetUpService =(id:any)=>{
    return new Promise((resolve, reject) => {
        try {
            const data=  zoneSetupModel.findOneAndDelete({_id:id}).catch((eror:any) => {
                reject(eror)
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}

let listZoneSetUpService =()=>{
    return new Promise((resolve, reject) => {
        try {
            const data=  zoneSetupModel.find().catch((eror:any) => {
                reject(eror)
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}

let updateZoneSetUpService =(id:string,updateValue:updateZoneSetUpInterFace)=>{
    return new Promise((resolve, reject) =>{
        try {
            const data:any  = zoneSetupModel.findOneAndUpdate({_id:id},updateValue).catch((eror:any) => {
                reject(eror)
            });
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let updateZoneSetUpLocationsService =(id:string,updateData:any)=>{
    return new Promise((resolve, reject) =>{
        try {
            const data:any  = zoneSetupModel.findOneAndUpdate({_id:id},updateData).catch((eror:any) => {
                reject(eror)
            });
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}



export {
    checkUniqueZoneNameValidation,
    addZoneService,
    findOneZone,
    deleteZoneSetUpService,
    listZoneSetUpService,updateZoneSetUpService,checkByIdUniqueZoneNameValidation,zoneSetupFindById,
    updateZoneSetUpLocationsService

}