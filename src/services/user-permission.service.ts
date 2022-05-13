import userModel from '../models/models/user';
// import userModelPermissionModel from '../models/models/user-permission';
// import permissionModel from '../models/models/permissions';
import mongoose,{ObjectId} from 'mongoose'

import  {permissionsModel,userModelPermissionModel} from 'mongoose-autogenrate-client-permissions'
import {aggregate} from './shared.service'

// const UserFindOne = (value:Object) =>{
//     return new Promise(async(resolve,reject) =>{
//       try {
//           const data:any = await userModel.findOne(value);
//           resolve(data)
//       } catch (error) {
//           reject(error);
//       }
//     })
// }

const AddPermissionService = (value:any) =>{
    return new Promise(async(resolve,reject) =>{
        try {
            const data:any = await userModelPermissionModel.create(value);
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

const getPermissionService = () =>{
     return new Promise(async(resolve,reject) =>{
         try {
             const data:any = await permissionsModel.find();
             resolve(data)

         } catch (error) {
             reject(error)
         }
     })
}

const checkPermission = (moduleName:string,userId:any) =>{
     console.log("ok",moduleName,userId);
     return new Promise(async(resolve, reject) =>{
         const data:any = await aggregate(userModelPermissionModel,[
             {
                 $match:{
                     userId:new mongoose.Types.ObjectId(userId),
                 }
             },
             {
                 $lookup: {
                     from:'permissions',
                     localField: 'permissionId',
                     foreignField:'_id',
                     as:"permissions"
                 }
             },
             {
                 $group: {
                     _id:{
                         "module":"$permissions.model_name"
                     }
                 }
             },
            //  {
            //      $match: {
            //          '_id.module':{
            //              $in:[moduleName]
            //          }
            //      }
            //  },
             {
                 $project: {
                     'module':'$_id.module'
                 }
             },
             {
                 $project:{
                    _id:0
                 }
             }
            
         ]);
         resolve(data)
     });
 
     
}
const chekcUserPermissions = (value:any[],userId:any) =>{
    console.log(value,"ok",userId);
  
    return new Promise(async(resolve, reject) =>{
        const data:any = await aggregate(userModelPermissionModel,[
            {
                $match:{
                    userId:new mongoose.Types.ObjectId(userId),
                }
            },
            {
                $addFields:{
                    check_fields:value
                }
            },
            {
                $addFields:{
                    check_fields_method:'$check_fields.method'
                }
            },
            
            {
                $lookup:{
                    from:'permissions',
                    localField: 'permissionId',
                    foreignField:'_id',
                    as:'permissions',
                   
                }
            },
            // {
            //     $match:{
            //         "test.model_name":"users"
            //     }
            // }
            // {
            //     $lookup: {
            //         from:'permissions',
            //         let: {method:'$check_fields_method'},
            //         // localField: 'permissionId',
            //         // foreignField:'_id',
            //         as:"permissions",
            //         pipeline:[
            //             {
            //                 $match: {$expr: {$in: ['$method', '$$method']}}
            //            },
            //         ]
            //     }
            // },
            // {
            //     $match: {
            //         "$permissions.model_name":"users"
            //  },
            // }
          

            // {
            //     $project: {
            //         permissions:1,
            //         permissions1: {
            //             $filter: {
            //                 input: "$check_fields",
            //                 as: "reply",
            //                 cond: {
            //                     $in: ["$$reply.method", "$permissions.method"],
            //                 },
            //             },
            //         },
            //     },
            // },
      {
          $project:{permissions:1}
      }
           
        ]);
        console.log(data[0],">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        
        resolve(data)
    });

    
}

// Test('623d6e7ccc2f979ac2cb06f3').then((data) => {
//     console.log(data[3],"?");
    
// })

const allPermissionsService = (userId:any) =>{
    return new Promise<any>(async(resolve, reject) =>{
        try {
            const filter:any[] = [
                {
                    $match:{
                        userId:new mongoose.Types.ObjectId(userId),
                    }
                }
            ]
            const data:any = await aggregate(userModelPermissionModel,filter);
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}

const checkUsersPermissionsService = (userId:string) => {
    return new Promise(async(resolve, reject) =>{
        try {
            var filter:any[] = [
               {
                   $match:{
                       userId:new mongoose.Types.ObjectId(userId)
                   }
               },
              
            ];
            var data:any = await aggregate(userModelPermissionModel,filter);
            console.log(data);
            
            var permissionsId:any = [];
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].permissionId);
                permissionsId.push(data[i].permissionId);
                // permissionsId = [...data[i].permissionId]
            }
             data = await permissionsModel.find({_id:permissionsId})
            // filter =[
            //     {
            //         $match:{
            //             _id:new mongoose.Types.ObjectId(permissionsId)
            //         }
            //     }
            // ];
            // var data:any = await aggregate(userModelPermissionModel,filter);
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}
export {
    getPermissionService,AddPermissionService,checkPermission,allPermissionsService,chekcUserPermissions,checkUsersPermissionsService
}