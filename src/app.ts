import express from 'express';
import Routes from './modules/auth.modules/auth.modules';
import {connection} from './db/index';
import {ZoneSetUpRoutes} from './modules/zone-setup.modules/zone-setup.router';
import routes from './modules/app.routes';
import  {autogenratePermission,addClientPermission,checkClientPermissionsMiddilware} from 'mongoose-autogenrate-client-permissions'
// console.log(routes);
import mongoose from 'mongoose'

import cors from 'cors';
express.json();

 class App {
    app:any = express()
    port = 3001
    constructor() {
      this.intializeMiddleware()
      connection();
      autogenratePermission()
      // autogenratePermission.autogenratePermission()

   
    }
  
    intializeMiddleware() { 
      this.app.use(cors())
      this.app.use(express.json())
      this.app.use("/api",routes);
      this.app.post("/test",async(req:express.Request,res:express.Response)=>{
        try {
            const payload = req.body; 
            const data = await addClientPermission(payload.userId,payload.permissionId);
            return res.status(200).json({data})
        } catch (error) {
          return res.status(500).json({error:error.message})
        }
      });
      this.app.get("/test",this.test,async(req:express.Request,res:express.Response)=>{
        try {
         
            return res.status(200).json({status:200,message:"done"})
        } catch (error) {
          return res.status(500).json({error:error.message})
        }
      })
    
    }
     async test(req:express.Request,res:express.Response){
      try {
        const data:any = await this.checkPermission("users","users","_id","62247a9aa2bdf04a5b842cbd","GET");
        return res.status(200).json({data})
      } catch (error) {
        res.status(500).json({error})
      }
    }
   async checkPermission(clientModelName:any,checkModelName:any,clentForeignField:any,clientId:any,method:any){
    return new Promise((resolve,reject)=>{

      mongoose.connection.db.collection('user_auth_permissions').aggregate([
        {
          $lookup:
          {
            from: 'permissions',
            localField: 'permissionId',
            foreignField: '_id',
            as: 'permissions',
          },
        },
    
        {
          $lookup: {
            from: clientModelName,
            localField: 'userId',
            foreignField: clentForeignField,
            as: 'user'
          }
        }
        ,
        { $match: { userId: new mongoose.Types.ObjectId(clientId), permissions: { $elemMatch: { model_name: checkModelName, method: method } } } },
      ]).toArray().then(data => {
        mongoose.connection.db.collection(clientModelName).findOne({_id:new mongoose.Types.ObjectId(clientId)}).then(result=>{
           if(data.length == 0){
              reject(false)
            // return res.status(403).json({ message: "not permission this route" })
          }
          else{
            resolve(true)
            // next()
          }
        })
      });
    })
   }
    

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port : ${this.port}`);
        });
    }
}

export default App



