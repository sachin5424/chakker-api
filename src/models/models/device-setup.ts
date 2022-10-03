import mongoose from 'mongoose';


const schema: any = new mongoose.Schema({
    deviceId: {
        type: String,
        required:true,
    },
    location: {
        type: {
            type: String,
            default:"Point"
        },
        coordinates: Array
    },
    zoneId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"zone_setup"
    },
    subZoneId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"sub_zone"
    },
    imeiNumber: {
        type: Number,
        required:true
    },
    simNumber:{
        type: String,
        required:true
    },
    PumpHp:{
        type:String,
    },
    applicationType:{
        type:String,
    },
    deviceType:{
        type:String,
    },
    operatorName:{
        type:String,
    },
    operatorNumber:{
        type:String
    },
    installationDate:{
        type:Date,
        required:true
    },
    serviceOverDate:{
        type:Date,
    },
    smsNumber:{
        type:String
    },
    smsStatus:{
        type:String
    },
    place:{
        type:String,
    },
    power:{
        type:Boolean,
        default:false
    },
    doff:{
        type:Boolean,
        default:false
    },
    silencer:{
        type:Number,
        default:0
    },
    dg:{
        type:Number,
        default:0 
    },
    degTemperaure1:{
        type:Number,
        default:0
    },
    degTemperaure2:{
        type:Number,
        default:0

    },
    pressure1KPA:{
        type:Number,
        default:0
    },
    pressure2KPA:{
        type:Number,
        default:0
    },
    pressureSetPoint1KPA:{
        type:Number,
        default:0
    },
    pressureSetPoint2KPA:{
        type:Number,
        default:0
    },
    signalStrength:{
        type:Number,
        default:0
    },
    lastStringDateStamp:{
        type:Date,
        
    },
    Image:{
        type:String,
        default:null
    },
    startTime:{
        type:String,
    },
    timelog:[
        {
            startTime:{
                type:Date
            },
            endTime:{
                type:Date,
             
            },
            days: {type:Number,default:0}, hours: {type:Number,default:0}, minutes: {type:Number,default:0}, seconds: {type:Number,default:0},milliseconds:{type:Number,default:0}
        }
    ],
    mode:{
        type:Number,
        default:1
    }
    

});

const deviceSetupModel = mongoose.model('device_setup', schema);

export default deviceSetupModel