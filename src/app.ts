import express from 'express';
import Routes from './routes/auth.routes';
import {connection} from './models/index';
import {ZoneSetUpRoutes} from './routes/zone-setup.routes';
import routes from './routes';
import  {autogenratePermission,addClientPermission,checkClientPermissionsMiddilware,permissionsModel} from 'mongoose-autogenrate-client-permissions'
// console.log(routes);
import mongoose from 'mongoose'
import {ADMINJWTVERIFY} from './middleware/admin-verify-jwt'
import path from 'path'
import cors from 'cors';
import multer from 'multer'
express.json();

const imageStorage = multer.diskStorage({
  // Destination to store image     
  destination: 'upload', 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Image'))
     }
   cb(undefined, true)
}
}) 

 class App {
    app:any = express()
    port = 3001
    constructor() {
      this.intializeMiddleware()
     
      // permissionsModel.find().then(data => {
      //   console.log(data);
        
      // })
      // console.log( permissionsModel.find());
      
      // autogenratePermission()
      // autogenratePermission.autogenratePermission()

   
    }
  
    intializeMiddleware() { 
      this.app.use(cors())
      this.app.use(express.json())
      this.app.use("/api/admin",ADMINJWTVERIFY)
      this.app.use("/api",routes);
      this.app.use(express.static('./iotproject'));
      this.app.use(express.static(path.join(__dirname,'../upload/')));
      this.app.get('*', function (request, response) {
        response.sendFile(path.join(__dirname, '/iotproject/index.html'));
    });

    this.app.post('/uploadImage',imageUpload.single('image'),(req:any, res:any) => {
      try {
        return res.json({success:200, url:`http://13.234.48.21:3001/${req.file.filename}`})//http://13.234.48.21:3001/
      } catch (error) {
        return res.status(400).send({ error: error.message })
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
          connection();
            console.log(`App listening on the port : ${this.port}`);
        });
    }
}

export default App



