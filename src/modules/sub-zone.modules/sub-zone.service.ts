import {subZoneModel} from '../../db/index';
import {subZoneInterFace,updateSubZoneInterFace} from './sub-zone.interface'

let checkUniqueZoneNameValidation = (zoneName: string) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const data = await subZoneModel.findOne({ zoneName: zoneName}).catch((err:any) => {
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
            const data = await subZoneModel.findOne({_id:{$ne:id}, zoneName: zoneName}).catch((err:any) => {
                reject(err);
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}

let addZoneService =async (setUpZone:subZoneInterFace)=>{
  return new Promise(async (resolve, reject) => {
    try {
        const data = await subZoneModel.create(setUpZone).catch((err:any) => {
            reject(err)
        });
        resolve(data)
    } catch (error) {
        reject(error);
    }
  })
}

let zoneFindById = async (id:string) => {
   return new Promise(async(resolve, reject) => {
       try {
           const data = await subZoneModel.findById({_id:id}).catch((err:any)=>{
               reject(err)
           });
           resolve(data)
       } catch (error) {
           reject(error)
       }
   })
}

let subZoneFindById = async (id:string) => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await subZoneModel.findById({_id:id}).catch((err:any)=>{
                reject(err)
            });
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
 }


let findOneZone = (id:any) => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await subZoneModel.findOne({_id:id}).catch((error:any)=>{
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
            const data=  subZoneModel.findOneAndDelete({_id:id}).catch((eror:any) => {
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
            const data=  subZoneModel.find().catch((eror:any) => {
                reject(eror)
            });
            resolve(data)
        } catch (error) {
            reject(error);
        }
    })
}

let updateZoneSetUpService =(id:string,updateValue:updateSubZoneInterFace)=>{
    return new Promise((resolve, reject) =>{
        try {
            const data:any  = subZoneModel.findOneAndUpdate({_id:id},updateValue).catch((eror:any) => {
                reject(eror)
            });
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
};

let updateZoneSetUpLocationsService =(id:string,updateData:any)=>{
    return new Promise((resolve, reject) =>{
        try {
            const data:any  = subZoneModel.findOneAndUpdate({_id:id},updateData).catch((eror:any) => {
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
    listZoneSetUpService,
    zoneFindById,
    updateZoneSetUpService,
    checkByIdUniqueZoneNameValidation,
    subZoneFindById,
    updateZoneSetUpLocationsService

}