import {deviceSetupModel} from '../models/index';
import mongoose from 'mongoose'

let aggregate = (model:any,filter:any[]) =>{
    return new Promise((resolve,reject)=>{
        model.aggregate(
            filter
        ).exec( function (err:any, invites:any) {
            if (err) {
             reject(err)
            }
            resolve(invites)
          }
        );
    })   
}

const PowerOfService = (_id:any,_value:Boolean) =>{
    console.log(_value);
    
    return new Promise<any[]>(async (resolve, reject) =>{
        try {
            const data:any[] = await deviceSetupModel.findOneAndUpdate({_id},{power:_value,lastStringDateStamp:Date.now()});

            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
};


const DeviceFindById = (_id:any,) =>{
    return new Promise<any[]>(async (resolve, reject) =>{
        try {
            const data:any[] = await deviceSetupModel.findOne({_id});
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
};

const DeviceFindByIdAndFilter = (_id:any,) =>{
    return new Promise<any[]>(async (resolve, reject) =>{
        try {
            const data:any = await aggregate(deviceSetupModel,[
            {
                $match:{
                  _id:new mongoose.Types.ObjectId(_id)
                }
            },
            {
                $lookup: {
                    from: 'zone_setups',
                    localField: 'zoneId',
                    foreignField: '_id',
                    as: 'zoneId'
                  },
            },
            {$unwind:"$zoneId"},
            {
                $lookup: {
                    from: 'sub_zones',
                    localField: 'subZoneId',
                    foreignField: '_id',
                    as: 'subZoneId'
                  },
            },
            {$unwind:"$subZoneId"},


            ]);
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
};




export {
    PowerOfService,
    DeviceFindById,
    DeviceFindByIdAndFilter
}