import mongoose from 'mongoose';


//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/my_database';

let connection = () =>{
     var mongoUrl:string = "mongodb+srv://sachin:URnb17mqFrVFqnT2@cluster0.fsuun.mongodb.net/IOTPROJET?retryWrites=true&w=majority";
     var localMOngo = "mongodb://root:admim@13.233.18.144:27017/test"
     var t = "mongodb://13.233.18.144/:27017/hhh"
     mongoose.connect(mongoUrl);
     mongoose.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ");
    });
    mongoose.connection.on('error', function (err) {
        //console.log("Mongoose default connection has occured " + err + " error"));
    });
        mongoose.connection.on('disconnected', function () {
        //console.log("Mongoose default connection is disconnected"));
    });
    
}

// CA0jIknSNCa29lbE
// CA0jIknSNCa29lbE
export {
    connection
}