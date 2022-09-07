import {deviceSetupModel} from '../models/index';
import mongoose from 'mongoose';
import moment from 'moment';

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

const PowerOfService = (_id:any,_value:Boolean,startTime:any) =>{
    console.log(_value);
    var startTime_log :any
    var endTime_log :any
    var data:any
    if(_value == false){
         startTime_log = Date.now();
         endTime_log = Date.now();
    }
    return new Promise<any[]>(async (resolve, reject) =>{
        try {
             data = await deviceSetupModel.findOneAndUpdate({_id},{power:_value,lastStringDateStamp:Date.now(),startTime:startTime});
            if(_value == false){
                
                startTime_log = await DeviceFindById(_id);
                console.log(startTime_log,"?????????")
                endTime_log = Date.now();

               

                function duration(t0:any, t1:any){
                    var end:any =new Date(t0);
                    var d:any = new Date(t1)
                    d = d-end 
                    let weekdays     = Math.floor(d/1000/60/60/24/7);
                    let days         = Math.floor(d/1000/60/60/24 - weekdays*7);
                    let hours        = Math.floor(d/1000/60/60    - weekdays*7*24            - days*24);
                    let minutes      = Math.floor(d/1000/60       - weekdays*7*24*60         - days*24*60         - hours*60);
                    let seconds      = Math.floor(d/1000          - weekdays*7*24*60*60      - days*24*60*60      - hours*60*60      - minutes*60);
                    let milliseconds = Math.floor(d               - weekdays*7*24*60*60*1000 - days*24*60*60*1000 - hours*60*60*1000 - minutes*60*1000 - seconds*1000);
                    let t = {};
                    ['weekdays', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'].forEach(q=>{ if (eval(q)>0) { t[q] = eval(q); } });
                    return t;
                }

                var log =  duration(new Date(parseInt(startTime_log.startTime)), endTime_log);
                log['startTime'] = parseInt(startTime_log.startTime)
                log['endTime'] = new Date()
                // console.log(log,startTime_log)
               data = await deviceSetupModel.findOneAndUpdate({_id},{power:_value,lastStringDateStamp:Date.now(),$push:{timelog:{...log}}});

           }
            resolve(data)
        } catch (error) {
            console.log(error.message);
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
            {
                $lookup: {
                    from: 'DeviceLastLogs',
                    localField: 'deviceId',
                    foreignField: 'DeviceIMEI',
                    as: 'DeviceLastLogs'
                  },
            },
                      
          { $unwind: {path: "$DeviceLastLogs", preserveNullAndEmptyArrays: true} },


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